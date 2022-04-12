
const traversalBFS = function(graph) {

    const queue = [0];
    let traversed = new Set([0]);
    const visited = [];

    while(queue.length) {
        let curr = queue.shift();
        visited.push(curr);
        for (let item of graph[curr]) {
            if (!traversed.has(item)) {
                queue.push(item);
                traversed.add(item);
            }

        }
    }

    return visited;
}




const adjacencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2]
];

console.log(traversalBFS(adjacencyList));








