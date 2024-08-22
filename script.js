// // // const canvas = document.getElementById('graphCanvas');
// // // const ctx = canvas.getContext('2d');

// // // let adjacencyMatrix = [];
// // // let nodeCoordinates = [];
// // // let nodeCount = 0;

// // // document.getElementById('inputFile').addEventListener('change', readInputFile);
// // // document.getElementById('findPath').addEventListener('click', findShortestPath);

// // // function readInputFile(event) {
// // //     const file = event.target.files[0];
// // //     if (!file) return;

// // //     const reader = new FileReader();
// // //     reader.onload = function(e) {
// // //         const lines = e.target.result.split('\n');
// // //         nodeCount = lines.length;
// // //         adjacencyMatrix = Array.from({ length: nodeCount }, () => Array(nodeCount).fill(-1));
// // //         nodeCoordinates = [];

// // //         lines.forEach(line => {
// // //             const [nodeA, nodeB, distance, xA, yA, xB, yB] = line.split(' ');

// // //             const indexA = nodeA.charCodeAt(0) - 65;
// // //             const indexB = nodeB.charCodeAt(0) - 65;

// // //             adjacencyMatrix[indexA][indexB] = parseInt(distance);
// // //             adjacencyMatrix[indexB][indexA] = parseInt(distance);

// // //             if (!nodeCoordinates[indexA]) {
// // //                 nodeCoordinates[indexA] = { x: parseInt(xA), y: parseInt(yA) };
// // //             }
// // //             if (!nodeCoordinates[indexB]) {
// // //                 nodeCoordinates[indexB] = { x: parseInt(xB), y: parseInt(yB) };
// // //             }
// // //         });

// // //         drawGraph();
// // //     };

// // //     reader.readAsText(file);
// // // }

// // // function drawGraph() {
// // //     ctx.clearRect(0, 0, canvas.width, canvas.height);

// // //     // Draw edges
// // //     for (let i = 0; i < nodeCount; i++) {
// // //         for (let j = i + 1; j < nodeCount; j++) {
// // //             if (adjacencyMatrix[i][j] !== -1) {
// // //                 ctx.beginPath();
// // //                 ctx.moveTo(nodeCoordinates[i].x, nodeCoordinates[i].y);
// // //                 ctx.lineTo(nodeCoordinates[j].x, nodeCoordinates[j].y);
// // //                 ctx.strokeStyle = "#ccc";
// // //                 ctx.stroke();
// // //                 ctx.closePath();

// // //                 // Display distance on the edge
// // //                 const midX = (nodeCoordinates[i].x + nodeCoordinates[j].x) / 2;
// // //                 const midY = (nodeCoordinates[i].y + nodeCoordinates[j].y) / 2;
// // //                 ctx.fillStyle = "#555";
// // //                 ctx.fillText(adjacencyMatrix[i][j], midX, midY);
// // //             }
// // //         }
// // //     }

// // //     // Draw nodes
// // //     nodeCoordinates.forEach((coord, index) => {
// // //         ctx.beginPath();
// // //         ctx.arc(coord.x, coord.y, 20, 0, 2 * Math.PI);
// // //         ctx.fillStyle = "#4CAF50";
// // //         ctx.fill();
// // //         ctx.strokeStyle = "#333";
// // //         ctx.stroke();
// // //         ctx.closePath();

// // //         // Draw node label
// // //         ctx.fillStyle = "#fff";
// // //         ctx.fillText(String.fromCharCode(65 + index), coord.x - 5, coord.y + 5);
// // //     });
// // // }

// // // function minDistance(dist, visited) {
// // //     let min = Infinity;
// // //     let minIndex = -1;

// // //     for (let v = 0; v < nodeCount; v++) {
// // //         if (!visited[v] && dist[v] <= min) {
// // //             min = dist[v];
// // //             minIndex = v;
// // //         }
// // //     }
// // //     return minIndex;
// // // }

// // // function findShortestPath() {
// // //     const source = document.getElementById('source').value.toUpperCase().charCodeAt(0) - 65;
// // //     const destination = document.getElementById('destination').value.toUpperCase().charCodeAt(0) - 65;

// // //     dijkstra(source, destination);
// // // }

// // // function dijkstra(source, destination) {
// // //     const dist = new Array(nodeCount).fill(Infinity);
// // //     const parentArr = new Array(nodeCount).fill(-1);
// // //     const visited = new Array(nodeCount).fill(false);
// // //     dist[source] = 0;

// // //     for (let count = 0; count < nodeCount - 1; count++) {
// // //         let u = minDistance(dist, visited);
// // //         visited[u] = true;

// // //         for (let v = 0; v < nodeCount; v++) {
// // //             if (!visited[v] && adjacencyMatrix[u][v] !== -1 && 
// // //                 dist[u] !== Infinity && dist[u] + adjacencyMatrix[u][v] < dist[v]) {
// // //                 dist[v] = dist[u] + adjacencyMatrix[u][v];
// // //                 parentArr[v] = u;
// // //             }
// // //         }
// // //     }

// // //     if (dist[destination] === Infinity) {
// // //         alert("No path found between the selected nodes.");
// // //         document.getElementById('shortestDistance').innerText = "";
// // //         return;
// // //     }

// // //     // Highlight the shortest path
// // //     let path = [];
// // //     for (let at = destination; at !== -1; at = parentArr[at]) {
// // //         path.push(at);
// // //     }
// // //     path.reverse();

// // //     drawGraph();
// // //     ctx.strokeStyle = "blue";
// // //     ctx.lineWidth = 4;

// // //     for (let i = 0; i < path.length - 1; i++) {
// // //         drawArrow(nodeCoordinates[path[i]], nodeCoordinates[path[i+1]]);
// // //     }

// // //     document.getElementById('shortestDistance').innerText = 
// // //         `Shortest distance from ${String.fromCharCode(source + 65)} to ${String.fromCharCode(destination + 65)} is: ${dist[destination]}`;
// // // }

// // // function drawArrow(start, end) {
// // //     const headlen = 10; // length of head in pixels
// // //     const angle = Math.atan2(end.y - start.y, end.x - start.x);

// // //     ctx.beginPath();
// // //     ctx.moveTo(start.x, start.y);
// // //     ctx.lineTo(end.x, end.y);
// // //     ctx.stroke();

// // //     ctx.beginPath();
// // //     ctx.moveTo(end.x, end.y);
// // //     ctx.lineTo(end.x - headlen * Math.cos(angle - Math.PI / 6), end.y - headlen * Math.sin(angle - Math.PI / 6));
// // //     ctx.lineTo(end.x - headlen * Math.cos(angle + Math.PI / 6), end.y - headlen * Math.sin(angle + Math.PI / 6));
// // //     ctx.lineTo(end.x, end.y);
// // //     ctx.lineTo(end.x - headlen * Math.cos(angle - Math.PI / 6), end.y - headlen * Math.sin(angle - Math.PI / 6));
// // //     ctx.stroke();
// // //     ctx.fillStyle = "blue";
// // //     ctx.fill();
// // // }
















// // const canvas = document.getElementById('graphCanvas');
// // const ctx = canvas.getContext('2d');

// // let adjacencyMatrix = [];
// // let nodeCoordinates = [];
// // let nodeNames = {};
// // let nodeCount = 0;

// // document.getElementById('inputFile').addEventListener('change', readInputFile);
// // document.getElementById('findPath').addEventListener('click', findShortestPath);

// // function readInputFile(event) {
// //     const file = event.target.files[0];
// //     if (!file) return;

// //     const reader = new FileReader();
// //     reader.onload = function(e) {
// //         const lines = e.target.result.split('\n');
// //         nodeCount = lines.length;
// //         adjacencyMatrix = Array.from({ length: nodeCount }, () => Array(nodeCount).fill(-1));
// //         nodeCoordinates = [];
// //         nodeNames = {};

// //         lines.forEach((line, index) => {
// //             const [nodeA, nodeB, distance, xA, yA, xB, yB] = line.split(' ');

// //             if (!(nodeA in nodeNames)) {
// //                 nodeNames[nodeA] = index;
// //             }
// //             if (!(nodeB in nodeNames)) {
// //                 nodeNames[nodeB] = Object.keys(nodeNames).length;
// //             }

// //             const indexA = nodeNames[nodeA];
// //             const indexB = nodeNames[nodeB];

// //             adjacencyMatrix[indexA][indexB] = parseInt(distance);
// //             adjacencyMatrix[indexB][indexA] = parseInt(distance);

// //             if (!nodeCoordinates[indexA]) {
// //                 nodeCoordinates[indexA] = { x: parseFloat(xA), y: parseFloat(yA) };
// //             }
// //             if (!nodeCoordinates[indexB]) {
// //                 nodeCoordinates[indexB] = { x: parseFloat(xB), y: parseFloat(yB) };
// //             }
// //         });

// //         drawGraph();
// //     };

// //     reader.readAsText(file);
// // }

// // function drawGraph() {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);

// //     // Draw edges
// //     for (let i = 0; i < nodeCount; i++) {
// //         for (let j = i + 1; j < nodeCount; j++) {
// //             if (adjacencyMatrix[i][j] !== -1) {
// //                 ctx.beginPath();
// //                 ctx.moveTo(nodeCoordinates[i].x, nodeCoordinates[i].y);
// //                 ctx.lineTo(nodeCoordinates[j].x, nodeCoordinates[j].y);
// //                 ctx.strokeStyle = "#ccc";
// //                 ctx.stroke();
// //                 ctx.closePath();

// //                 // Display distance on the edge
// //                 const midX = (nodeCoordinates[i].x + nodeCoordinates[j].x) / 2;
// //                 const midY = (nodeCoordinates[i].y + nodeCoordinates[j].y) / 2;
// //                 ctx.fillStyle = "#555";
// //                 ctx.fillText(adjacencyMatrix[i][j], midX, midY);
// //             }
// //         }
// //     }

// //     // Draw nodes
// //     Object.keys(nodeNames).forEach((name, index) => {
// //         const coord = nodeCoordinates[nodeNames[name]];
// //         ctx.beginPath();
// //         ctx.arc(coord.x, coord.y, 20, 0, 2 * Math.PI);
// //         ctx.fillStyle = "#4CAF50";
// //         ctx.fill();
// //         ctx.strokeStyle = "#333";
// //         ctx.stroke();
// //         ctx.closePath();

// //         // Draw node label
// //         ctx.fillStyle = "#fff";
// //         ctx.fillText(name, coord.x - 15, coord.y + 5);
// //     });
// // }

// // function minDistance(dist, visited) {
// //     let min = Infinity;
// //     let minIndex = -1;

// //     for (let v = 0; v < nodeCount; v++) {
// //         if (!visited[v] && dist[v] <= min) {
// //             min = dist[v];
// //             minIndex = v;
// //         }
// //     }
// //     return minIndex;
// // }

// // function findShortestPath() {
// //     const source = document.getElementById('source').value;
// //     const destination = document.getElementById('destination').value;

// //     if (!(source in nodeNames) || !(destination in nodeNames)) {
// //         alert("Invalid source or destination node.");
// //         return;
// //     }

// //     dijkstra(nodeNames[source], nodeNames[destination]);
// // }

// // function dijkstra(source, destination) {
// //     const dist = new Array(nodeCount).fill(Infinity);
// //     const parentArr = new Array(nodeCount).fill(-1);
// //     const visited = new Array(nodeCount).fill(false);
// //     dist[source] = 0;

// //     for (let count = 0; count < nodeCount - 1; count++) {
// //         let u = minDistance(dist, visited);
// //         visited[u] = true;

// //         for (let v = 0; v < nodeCount; v++) {
// //             if (!visited[v] && adjacencyMatrix[u][v] !== -1 && 
// //                 dist[u] !== Infinity && dist[u] + adjacencyMatrix[u][v] < dist[v]) {
// //                 dist[v] = dist[u] + adjacencyMatrix[u][v];
// //                 parentArr[v] = u;
// //             }
// //         }
// //     }

// //     if (dist[destination] === Infinity) {
// //         alert("No path found between the selected nodes.");
// //         document.getElementById('shortestDistance').innerText = "";
// //         return;
// //     }

// //     // Highlight the shortest path
// //     let path = [];
// //     for (let at = destination; at !== -1; at = parentArr[at]) {
// //         path.push(at);
// //     }
// //     path.reverse();

// //     drawGraph();
// //     ctx.strokeStyle = "blue";
// //     ctx.lineWidth = 4;

// //     for (let i = 0; i < path.length - 1; i++) {
// //         drawArrow(nodeCoordinates[path[i]], nodeCoordinates[path[i+1]]);
// //     }

// //     document.getElementById('shortestDistance').innerText = 
// //         `Shortest distance from ${source} to ${destination} is: ${dist[destination]}`;
// // }

// // function drawArrow(start, end) {
// //     const headlen = 10; // length of head in pixels
// //     const angle = Math.atan2(end.y - start.y, end.x - start.x);

// //     ctx.beginPath();
// //     ctx.moveTo(start.x, start.y);
// //     ctx.lineTo(end.x, end.y);
// //     ctx.stroke();

// //     ctx.beginPath();
// //     ctx.moveTo(end.x, end.y);
// //     ctx.lineTo(end.x - headlen * Math.cos(angle - Math.PI / 6), end.y - headlen * Math.sin(angle - Math.PI / 6));
// //     ctx.lineTo(end.x - headlen * Math.cos(angle + Math.PI / 6), end.y - headlen * Math.sin(angle + Math.PI / 6));
// //     ctx.lineTo(end.x, end.y);
// //     ctx.lineTo(end.x - headlen * Math.cos(angle - Math.PI / 6), end.y - headlen * Math.sin(angle - Math.PI / 6));
// //     ctx.stroke();
// //     ctx.fillStyle = "blue";
// //     ctx.fill();
// // }









// // const canvas = document.getElementById('graphCanvas');
// // const ctx = canvas.getContext('2d');

// // let adjacencyMatrix = [];
// // let nodeCoordinates = [];
// // let nodeCount = 0;
// // let nodeIndexMap = new Map();
// // let reverseNodeIndexMap = new Map();

// // document.getElementById('inputFile').addEventListener('change', readInputFile);
// // document.getElementById('findPath').addEventListener('click', findShortestPath);

// // function readInputFile(event) {
// //     const file = event.target.files[0];
// //     if (!file) return;

// //     const reader = new FileReader();
// //     reader.onload = function(e) {
// //         const lines = e.target.result.split('\n');
// //         nodeCount = 0;
// //         adjacencyMatrix = [];
// //         nodeCoordinates = [];
// //         nodeIndexMap.clear();
// //         reverseNodeIndexMap.clear();

// //         lines.forEach(line => {
// //             const [nodeA, nodeB, distance, xA, yA, xB, yB] = line.split(' ');

// //             if (!nodeIndexMap.has(nodeA)) {
// //                 nodeIndexMap.set(nodeA, nodeCount);
// //                 reverseNodeIndexMap.set(nodeCount, nodeA);
// //                 nodeCount++;
// //             }
// //             if (!nodeIndexMap.has(nodeB)) {
// //                 nodeIndexMap.set(nodeB, nodeCount);
// //                 reverseNodeIndexMap.set(nodeCount, nodeB);
// //                 nodeCount++;
// //             }

// //             const indexA = nodeIndexMap.get(nodeA);
// //             const indexB = nodeIndexMap.get(nodeB);

// //             if (!adjacencyMatrix[indexA]) adjacencyMatrix[indexA] = [];
// //             if (!adjacencyMatrix[indexB]) adjacencyMatrix[indexB] = [];
// //             adjacencyMatrix[indexA][indexB] = parseInt(distance);
// //             adjacencyMatrix[indexB][indexA] = parseInt(distance);

// //             if (!nodeCoordinates[indexA]) {
// //                 nodeCoordinates[indexA] = { x: parseInt(xA), y: parseInt(yA) };
// //             }
// //             if (!nodeCoordinates[indexB]) {
// //                 nodeCoordinates[indexB] = { x: parseInt(xB), y: parseInt(yB) };
// //             }
// //         });

// //         drawGraph();
// //     };

// //     reader.readAsText(file);
// // }

// // function drawGraph() {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);

// //     // Draw edges
// //     for (let i = 0; i < nodeCount; i++) {
// //         for (let j = i + 1; j < nodeCount; j++) {
// //             if (adjacencyMatrix[i][j] !== undefined) {
// //                 ctx.beginPath();
// //                 ctx.moveTo(nodeCoordinates[i].x, nodeCoordinates[i].y);
// //                 ctx.lineTo(nodeCoordinates[j].x, nodeCoordinates[j].y);
// //                 ctx.strokeStyle = "#ccc";
// //                 ctx.stroke();
// //                 ctx.closePath();

// //                 // Display distance on the edge
// //                 const midX = (nodeCoordinates[i].x + nodeCoordinates[j].x) / 2;
// //                 const midY = (nodeCoordinates[i].y + nodeCoordinates[j].y) / 2;
// //                 ctx.fillStyle = "#555";
// //                 ctx.fillText(adjacencyMatrix[i][j], midX, midY);
// //             }
// //         }
// //     }

// //     // Draw nodes
// //     nodeCoordinates.forEach((coord, index) => {
// //         ctx.beginPath();
// //         ctx.arc(coord.x, coord.y, 5, 0, 2 * Math.PI);
// //         ctx.fillStyle = "#4CAF50";
// //         ctx.fill();
// //         ctx.strokeStyle = "#333";
// //         ctx.stroke();
// //         ctx.closePath();

// //         // Draw node label
// //         ctx.fillStyle = "black";
// //         ctx.fillText(reverseNodeIndexMap.get(index), coord.x - 5, coord.y + 5);
// //     });
// // }

// // function minDistance(dist, visited) {
// //     let min = Infinity;
// //     let minIndex = -1;

// //     for (let v = 0; v < nodeCount; v++) {
// //         if (!visited[v] && dist[v] <= min) {
// //             min = dist[v];
// //             minIndex = v;
// //         }
// //     }
// //     return minIndex;
// // }

// // function findShortestPath() {
// //     const source = document.getElementById('source').value;
// //     const destination = document.getElementById('destination').value;

// //     if (!nodeIndexMap.has(source) || !nodeIndexMap.has(destination)) {
// //         alert('Invalid source or destination');
// //         return;
// //     }

// //     const sourceIndex = nodeIndexMap.get(source);
// //     const destinationIndex = nodeIndexMap.get(destination);

// //     dijkstra(sourceIndex, destinationIndex);
// // }

// // function dijkstra(source, destination) {
// //     const dist = new Array(nodeCount).fill(Infinity);
// //     const parentArr = new Array(nodeCount).fill(-1);
// //     const visited = new Array(nodeCount).fill(false);
// //     dist[source] = 0;

// //     for (let count = 0; count < nodeCount - 1; count++) {
// //         let u = minDistance(dist, visited);
// //         visited[u] = true;

// //         for (let v = 0; v < nodeCount; v++) {
// //             if (!visited[v] && adjacencyMatrix[u][v] !== undefined &&
// //                 dist[u] !== Infinity && dist[u] + adjacencyMatrix[u][v] < dist[v]) {
// //                 dist[v] = dist[u] + adjacencyMatrix[u][v];
// //                 parentArr[v] = u;
// //             }
// //         }
// //     }

// //     if (dist[destination] === Infinity) {
// //         alert("No path found between the selected nodes.");
// //         document.getElementById('shortestDistance').innerText = "";
// //         return;
// //     }

// //     // Highlight the shortest path
// //     let path = [];
// //     for (let at = destination; at !== -1; at = parentArr[at]) {
// //         path.push(at);
// //     }
// //     path.reverse();

// //     drawGraph();
// //     ctx.strokeStyle = "blue";
// //     ctx.lineWidth = 4;

// //     for (let i = 0; i < path.length - 1; i++) {
// //         drawArrow(nodeCoordinates[path[i]], nodeCoordinates[path[i+1]]);
// //     }

// //     document.getElementById('shortestDistance').innerText = 
// //         `Shortest distance from ${reverseNodeIndexMap.get(source)} to ${reverseNodeIndexMap.get(destination)} is: ${dist[destination]}`;
// // }

// // function drawArrow(start, end) {
// //     const headlen = 10; // length of head in pixels
// //     const angle = Math.atan2(end.y - start.y, end.x - start.x);

// //     ctx.beginPath();
// //     ctx.moveTo(start.x, start.y);
// //     ctx.lineTo(end.x, end.y);
// //     ctx.stroke();

// //     ctx.beginPath();
// //     ctx.moveTo(end.x, end.y);
// //     ctx.lineTo(end.x - headlen * Math.cos(angle - Math.PI / 6), end.y - headlen * Math.sin(angle - Math.PI / 6));
// //     ctx.lineTo(end.x - headlen * Math.cos(angle + Math.PI / 6), end.y - headlen * Math.sin(angle + Math.PI / 6));
// //     ctx.lineTo(end.x, end.y);
// //     ctx.lineTo(end.x - headlen * Math.cos(angle - Math.PI / 6), end.y - headlen * Math.sin(angle - Math.PI / 6));
// //     ctx.stroke();
// //     ctx.fillStyle = "blue";
// //     ctx.fill();
// // }






// const canvas = document.getElementById('graphCanvas');
// const ctx = canvas.getContext('2d');

// let adjacencyMatrix = [];
// let nodeCoordinates = [];
// let nodeCount = 0;
// let nodeIndexMap = new Map();
// let reverseNodeIndexMap = new Map();
// let pathNodes = [];  // To store the nodes in the shortest path

// document.getElementById('inputFile').addEventListener('change', readInputFile);
// document.getElementById('findPath').addEventListener('click', findShortestPath);

// function readInputFile(event) {
//     const file = event.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = function(e) {
//         const lines = e.target.result.split('\n');
//         nodeCount = 0;
//         adjacencyMatrix = [];
//         nodeCoordinates = [];
//         nodeIndexMap.clear();
//         reverseNodeIndexMap.clear();

//         lines.forEach(line => {
//             const [nodeA, nodeB, distance, xA, yA, xB, yB] = line.split(' ');

//             if (!nodeIndexMap.has(nodeA)) {
//                 nodeIndexMap.set(nodeA, nodeCount);
//                 reverseNodeIndexMap.set(nodeCount, nodeA);
//                 nodeCount++;
//             }
//             if (!nodeIndexMap.has(nodeB)) {
//                 nodeIndexMap.set(nodeB, nodeCount);
//                 reverseNodeIndexMap.set(nodeCount, nodeB);
//                 nodeCount++;
//             }

//             const indexA = nodeIndexMap.get(nodeA);
//             const indexB = nodeIndexMap.get(nodeB);

//             if (!adjacencyMatrix[indexA]) adjacencyMatrix[indexA] = [];
//             if (!adjacencyMatrix[indexB]) adjacencyMatrix[indexB] = [];
//             adjacencyMatrix[indexA][indexB] = parseInt(distance);
//             adjacencyMatrix[indexB][indexA] = parseInt(distance);

//             if (!nodeCoordinates[indexA]) {
//                 nodeCoordinates[indexA] = { x: parseInt(xA), y: parseInt(yA) };
//             }
//             if (!nodeCoordinates[indexB]) {
//                 nodeCoordinates[indexB] = { x: parseInt(xB), y: parseInt(yB) };
//             }
//         });

//         updateDropdowns();
//         drawGraph();
//     };

//     reader.readAsText(file);
// }

// function updateDropdowns() {
//     const sourceSelect = document.getElementById('source');
//     const destinationSelect = document.getElementById('destination');

//     sourceSelect.innerHTML = '';
//     destinationSelect.innerHTML = '';

//     for (let [name, index] of nodeIndexMap) {
//         let option = new Option(name, name);
//         sourceSelect.add(option.cloneNode(true));
//         destinationSelect.add(option.cloneNode(true));
//     }
// }

// function drawGraph() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw edges
//     for (let i = 0; i < nodeCount; i++) {
//         for (let j = i + 1; j < nodeCount; j++) {
//             if (adjacencyMatrix[i][j] !== undefined) {
//                 ctx.beginPath();
//                 ctx.moveTo(nodeCoordinates[i].x, nodeCoordinates[i].y);
//                 ctx.lineTo(nodeCoordinates[j].x, nodeCoordinates[j].y);
//                 ctx.strokeStyle = "#ccc";
//                 ctx.stroke();
//                 ctx.closePath();

//                 // Display distance on the edge
//                 const midX = (nodeCoordinates[i].x + nodeCoordinates[j].x) / 2;
//                 const midY = (nodeCoordinates[i].y + nodeCoordinates[j].y) / 2;
//                 ctx.fillStyle = "#555";
//                 ctx.fillText(adjacencyMatrix[i][j], midX, midY);
//             }
//         }
//     }

//     // Draw nodes
//     nodeCoordinates.forEach((coord, index) => {
//         ctx.beginPath();
//         ctx.arc(coord.x, coord.y, 5, 0, 2 * Math.PI);

//         if (pathNodes.includes(index)) {
//             ctx.fillStyle = "#ff5722"; // Highlight color for path nodes
//         } else {
//             ctx.fillStyle = "#4CAF50"; // Default color for non-path nodes
//         }
//         ctx.fill();
//         ctx.strokeStyle = "#333";
//         ctx.stroke();
//         ctx.closePath();

//         // Only display labels for source and destination nodes
//         if (pathNodes.includes(index)) {
//             ctx.fillStyle = "black";
//             ctx.fillText(reverseNodeIndexMap.get(index), coord.x - 10, coord.y - 15);
//         }
//     });
// }

// function minDistance(dist, visited) {
//     let min = Infinity;
//     let minIndex = -1;

//     for (let v = 0; v < nodeCount; v++) {
//         if (!visited[v] && dist[v] <= min) {
//             min = dist[v];
//             minIndex = v;
//         }
//     }
//     return minIndex;
// }

// function findShortestPath() {
//     const source = document.getElementById('source').value;
//     const destination = document.getElementById('destination').value;

//     if (!nodeIndexMap.has(source) || !nodeIndexMap.has(destination)) {
//         alert('Invalid source or destination');
//         return;
//     }

//     const sourceIndex = nodeIndexMap.get(source);
//     const destinationIndex = nodeIndexMap.get(destination);

//     dijkstra(sourceIndex, destinationIndex);
// }

// function dijkstra(source, destination) {
//     const dist = new Array(nodeCount).fill(Infinity);
//     const parentArr = new Array(nodeCount).fill(-1);
//     const visited = new Array(nodeCount).fill(false);
//     dist[source] = 0;

//     for (let count = 0; count < nodeCount - 1; count++) {
//         let u = minDistance(dist, visited);
//         visited[u] = true;

//         for (let v = 0; v < nodeCount; v++) {
//             if (!visited[v] && adjacencyMatrix[u][v] !== undefined &&
//                 dist[u] !== Infinity && dist[u] + adjacencyMatrix[u][v] < dist[v]) {
//                 dist[v] = dist[u] + adjacencyMatrix[u][v];
//                 parentArr[v] = u;
//             }
//         }
//     }

//     if (dist[destination] === Infinity) {
//         alert("No path found between the selected nodes.");
//         document.getElementById('shortestDistance').innerText = "";
//         return;
//     }

//     // Get the path
//     pathNodes = [];
//     for (let at = destination; at !== -1; at = parentArr[at]) {
//         pathNodes.push(at);
//     }
//     pathNodes.reverse();

//     drawGraph();

//     document.getElementById('shortestDistance').innerText = 
//         `Shortest distance from ${reverseNodeIndexMap.get(source)} to ${reverseNodeIndexMap.get(destination)} is: ${dist[destination]}`;
// }










const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

let adjacencyMatrix = [];
let nodeCoordinates = [];
let nodeCount = 0;
let nodeIndexMap = new Map();
let reverseNodeIndexMap = new Map();
let hoveredNode = null;
let clickedNode = null;
let shortestPathNodes = [];  // Array to store nodes in the shortest path

document.getElementById('inputFile').addEventListener('change', readInputFile);
document.getElementById('findPath').addEventListener('click', findShortestPath);
canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('click', handleMouseClick);

function readInputFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const lines = e.target.result.split('\n');
        nodeCount = 0;
        adjacencyMatrix = [];
        nodeCoordinates = [];
        nodeIndexMap.clear();
        reverseNodeIndexMap.clear();

        lines.forEach(line => {
            const [nodeA, nodeB, distance, xA, yA, xB, yB] = line.split(' ');

            if (!nodeIndexMap.has(nodeA)) {
                nodeIndexMap.set(nodeA, nodeCount);
                reverseNodeIndexMap.set(nodeCount, nodeA);
                nodeCount++;
            }
            if (!nodeIndexMap.has(nodeB)) {
                nodeIndexMap.set(nodeB, nodeCount);
                reverseNodeIndexMap.set(nodeCount, nodeB);
                nodeCount++;
            }

            const indexA = nodeIndexMap.get(nodeA);
            const indexB = nodeIndexMap.get(nodeB);

            if (!adjacencyMatrix[indexA]) adjacencyMatrix[indexA] = [];
            if (!adjacencyMatrix[indexB]) adjacencyMatrix[indexB] = [];
            adjacencyMatrix[indexA][indexB] = parseInt(distance);
            adjacencyMatrix[indexB][indexA] = parseInt(distance);

            if (!nodeCoordinates[indexA]) {
                nodeCoordinates[indexA] = { x: parseInt(xA), y: parseInt(yA) };
            }
            if (!nodeCoordinates[indexB]) {
                nodeCoordinates[indexB] = { x: parseInt(xB), y: parseInt(yB) };
            }
        });

        populateDropdowns();
        drawGraph();
    };

    reader.readAsText(file);
}

function populateDropdowns() {
    const sourceSelect = document.getElementById('source');
    const destinationSelect = document.getElementById('destination');

    sourceSelect.innerHTML = '';
    destinationSelect.innerHTML = '';

    nodeIndexMap.forEach((value, key) => {
        const option = document.createElement('option');
        option.value = key;
        option.text = key;
        sourceSelect.add(option.cloneNode(true));
        destinationSelect.add(option);
    });
}


function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw edges
    for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
            if (adjacencyMatrix[i][j] !== undefined) {
                ctx.beginPath();
                ctx.moveTo(nodeCoordinates[i].x, nodeCoordinates[i].y);
                ctx.lineTo(nodeCoordinates[j].x, nodeCoordinates[j].y);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.closePath();

                // Display distance on the edge
                const midX = (nodeCoordinates[i].x + nodeCoordinates[j].x) / 2;
                const midY = (nodeCoordinates[i].y + nodeCoordinates[j].y) / 2;
                ctx.fillStyle = "#555";
                ctx.fillText(adjacencyMatrix[i][j], midX, midY);
            }
        }
    }

    // Draw nodes
    nodeCoordinates.forEach((coord, index) => {
        ctx.beginPath();
        ctx.arc(coord.x, coord.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#4CAF50";
        ctx.fill();
        ctx.strokeStyle = "#333";
        ctx.stroke();
        ctx.closePath();

        // Highlight nodes in the shortest path
        if (shortestPathNodes.includes(index)) {
            ctx.beginPath();
            ctx.arc(coord.x, coord.y, 10, 0, 2 * Math.PI);
            ctx.strokeStyle = "#FFA500"; // Highlight color for shortest path
            ctx.fillStyle = "#4CAF50";
        ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }

        // Highlight node if hovered or clicked
        if (hoveredNode === index || clickedNode === index) {
            ctx.beginPath();
            ctx.arc(coord.x, coord.y, 10, 0, 2 * Math.PI);
            ctx.strokeStyle = "#FFA500"; // Highlight color
            ctx.stroke();
            ctx.closePath();
        }

        // Draw node label in popup style if hovered or clicked
        if (hoveredNode === index || clickedNode === index) {
            ctx.fillStyle = "black";
            ctx.font = "12px Arial";
            ctx.fillText(reverseNodeIndexMap.get(index), coord.x + 10, coord.y - 10);
        }
    });
}

function handleMouseMove(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    hoveredNode = null;

    nodeCoordinates.forEach((coord, index) => {
        const distance = Math.sqrt(Math.pow(x - coord.x, 2) + Math.pow(y - coord.y, 2));
        if (distance < 5) {
            hoveredNode = index;
        }
    });

    drawGraph();
}

function handleMouseClick(event) {
    if (hoveredNode !== null) {
        clickedNode = hoveredNode;
    } else {
        clickedNode = null;
    }

    drawGraph();
}

function minDistance(dist, visited) {
    let min = Infinity;
    let minIndex = -1;

    for (let v = 0; v < nodeCount; v++) {
        if (!visited[v] && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
}

function findShortestPath() {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;

    if (!nodeIndexMap.has(source) || !nodeIndexMap.has(destination)) {
        alert('Invalid source or destination');
        return;
    }

    const sourceIndex = nodeIndexMap.get(source);
    const destinationIndex = nodeIndexMap.get(destination);

    dijkstra(sourceIndex, destinationIndex);
}

function dijkstra(source, destination) {
    const dist = new Array(nodeCount).fill(Infinity);
    const parentArr = new Array(nodeCount).fill(-1);
    const visited = new Array(nodeCount).fill(false);
    dist[source] = 0;

    for (let count = 0; count < nodeCount - 1; count++) {
        let u = minDistance(dist, visited);
        visited[u] = true;

        for (let v = 0; v < nodeCount; v++) {
            if (!visited[v] && adjacencyMatrix[u][v] !== undefined &&
                dist[u] !== Infinity && dist[u] + adjacencyMatrix[u][v] < dist[v]) {
                dist[v] = dist[u] + adjacencyMatrix[u][v];
                parentArr[v] = u;
            }
        }
    }

    if (dist[destination] === Infinity) {
        alert("No path found between the selected nodes.");
        document.getElementById('shortestDistance').innerText = "";
        return;
    }

    // Highlight the shortest path
    shortestPathNodes = [];
    for (let at = destination; at !== -1; at = parentArr[at]) {
        shortestPathNodes.push(at);
    }
    shortestPathNodes.reverse();


    document.getElementById('shortestDistance').innerText = 
        `Shortest distance from ${reverseNodeIndexMap.get(source)} to ${reverseNodeIndexMap.get(destination)} is: ${dist[destination]}`;

        drawGraph();
}
