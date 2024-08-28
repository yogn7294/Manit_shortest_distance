// Define the metro locations and their connections (graph)
const campusLocations = {
  'Main_gate': {
    'Director_office': 100,
  },
  'Director_office': {
    'Main_gate': 100,
    'Dean_office': 100,
    'Nescafe': 230,
  },
  'Dean_office': {
    'Director_office': 100,
    'Rolta': 50,
    'SBI_ATM': 150,
  },
  'Rolta': {
    'Dean_office': 50,
    'Robot': 10,
    'Neelam': 200,
  },
  'Nescafe': {
    'Director_office': 230,
    'Sbi_ground': 120,
  },
  'SBI_ATM': {
    'Dean_office': 150,
    'SBI': 3,
    'Robot': 4,
  },
  'Robot': {
    'Rolta': 10,
    'SBI_ATM': 4,
    'Canteen': 7,
  },
  'SBI': {
    'SBI_ATM': 3,
  },
  'Canteen': {
    'Robot': 7,
    'Activity_center': 100,
    'Workshop': 100,
  },
  'Activity_center': {
    'Canteen': 100,
    'Energy_center': 150,
  },
  'Energy_center': {
    'Activity_center': 150,
    'Sports_complex': 150,
  },
  'Sports_complex': {
    'Energy_center': 150,
    'Manit_lake_road': 200,
    'Dispensary': 150,
  },
  'Neelam': {
    'Rolta': 200,
    'PMC': 100,
  },
  'PMC': {
    'Neelam': 100,
    'Manit_lake_road': 400,
    'H7': 50,
    'Manit_school': 100,
  },
  'Manit_lake_road': {
    'PMC': 400,
    'Sports_complex': 200,
  },
  'Dispensary': {
    'Sports_complex': 150,
    'H1': 200,
    'H2': 200,
  },
  'H1': {
    'Dispensary': 200,
    'Pulia': 50,
    'departments': 50,
  },
  'Pulia': {
    'H1': 50,
    'H3': 50,
    'Susangat_tiraha': 750,
  },
  'H3': {
    'Pulia': 50,
    'H4': 100,
  },
  'H4': {
    'H3': 100,
    'Susangat_tiraha': 200,
  },
  'H2': {
    'Dispensary': 200,
    'Dasa_road': 50,
  },
  'Dasa_road': {
    'H2': 50,
    'Dasa': 50,
  },
  'Dasa': {
    'Dasa_road': 50,
    'H10': 100,
    'H11': 100,
  },
  'H10': {
    'Dasa': 100,
    'h8_h10_A': 50,
  },
  'h8_h10_A': {
    'H10': 50,
  },
  'Susangat_tiraha': {
    'H4': 200,
    'Pulia': 750,
    'H5': 300,
  },
  'H5': {
    'Susangat_tiraha': 300,
    'H6': 100,
  },
  'H6': {
    'H5': 100,
  },
  'H11': {
    'Dasa': 100,
  },
  'H7': {
    'PMC': 50,
    'H12': 200,
  },
  'H12': {
    'H7': 200,
    'Mandir': 100,
  },
  'Mandir': {
    'H12': 100,
    'Mandir_tiraha': 50,
  },
  'Mandir_tiraha': {
    'Mandir': 50,
    'H7_tiraha': 150,
    'Circular_gate': 100,
  },
  'H7_tiraha': {
    'Mandir_tiraha': 150,
    'Manit_school': 50,
  },
  'Manit_school': {
    'PMC': 100,
    'H7_tiraha': 50,
  },
  'Circular_gate': {
    'Mandir_tiraha': 100,
  },
  'Sbi_ground': {
    'Nescafe': 120,
    'NTB_gate': 50,
    'Workshop': 200,
  },
  'NTB_gate': {
    'Sbi_ground': 50,
    'LRC': 100,
  },
  'LRC': {
    'NTB_gate': 100,
  },
  'Workshop': {
    'Sbi_ground': 200,
    'Canteen': 100,
    'LRC_mod': 100,
  },
  'LRC_mod': {
    'Workshop': 100,
    'departments': 160,
  },
  'departments': {
    'LRC_mod': 160,
    'H1': 50,
  }
};


function calculate() {
 
  const sourceLocation = document.getElementById('source').value;
  const destinationLocation = document.getElementById('destination').value;

  
  if (sourceLocation === '' || destinationLocation === '') {
    alert('Please select source and destination locations.');
    return;
  }

  const locations = Object.keys(campusLocations);
  const INF = Number.MAX_SAFE_INTEGER;

  const distances = {};
  locations.forEach((location) => (distances[location] = INF));
  distances[sourceLocation] = 0;

  const visited = {};
  const path = {};

  while (true) {
    let currentLocation = null;

    locations.forEach((location) => {
      if (
        !visited[location] &&
        (currentLocation === null ||
          distances[location] < distances[currentLocation])
      ) {
        currentLocation = location;
      }
    });

    if (currentLocation === null || distances[currentLocation] === INF) {
      break;
    }

    visited[currentLocation] = true;

    for (const neighbor in campusLocations[currentLocation]) {
      const distance =
        distances[currentLocation] + campusLocations[currentLocation][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        path[neighbor] = currentLocation;
      }
    }
  }

  const route = [];
  let current = destinationLocation;
  while (current !== sourceLocation) {
    route.unshift(current);
    current = path[current];
  }
  route.unshift(sourceLocation);

  const fare = distances[destinationLocation];

  document.getElementById('route').textContent = route.join(' -> ');
  document.getElementById('fare').textContent = fare + ' Meters'; 
}
