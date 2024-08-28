

```markdown
# MANIT Bhopal Campus Route Finder

## Overview

This project is designed to find the shortest route between locations inside the MANIT Bhopal campus. The route is determined using Dijkstra's algorithm to calculate the shortest path based on predefined distances between various campus locations. Users can select a source and destination location from dropdown menus to find the shortest route and fare in meters.

## Features

- **Shortest Path Calculation:** Computes the shortest path between any two locations on the campus.
- **Distance Display:** Shows the total distance (fare) of the route in meters.
- **Dynamic Route Display:** Updates and displays the optimal route based on user selection.

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, etc.)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yogn7294/Manit_shortest_distance
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Manit_shortest_distance
   ```

3. **Open `index.html` in your web browser.**

### Usage

1. **Select Source Location:** Choose the starting location from the "Source Station" dropdown menu.
2. **Select Destination Location:** Choose the destination location from the "Destination Station" dropdown menu.
3. **Calculate Route:** Click the "Calculate" button to find the shortest route and fare.

### Example

For example, if you select "Main_gate" as the source and "Sports_complex" as the destination, the application will display the shortest path and the total distance between these two locations.

## Code Description

- **`campusLocations`**: An object representing the campus locations and their connections with distances.
- **`calculate()`**: A function to calculate the shortest path using Dijkstra's algorithm and update the route and fare.

### Key Functions

- **Dijkstra's Algorithm**: Calculates the shortest path from the source location to all other locations.
- **Dynamic Updates**: Updates the route and fare based on user input.

## Contributing

Feel free to contribute to the project by submitting issues, creating pull requests, or suggesting improvements.

1. **Fork the repository**
2. **Create a new branch**
3. **Make your changes**
4. **Submit a pull request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to [yogeshshirwar6261@gmail.com](mailto:yogeshahirwar6261@gmail.com).

---

Thank you for using the MANIT Bhopal Campus Route Finder!

```


