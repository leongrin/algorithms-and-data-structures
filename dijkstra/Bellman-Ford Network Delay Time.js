
const networkDelayTimeBellmanFord = (times, n, k) => {
    const distances = Array(n + 1).fill(Infinity);
    distances[0] = 0;
    distances[k] = 0;

    while (true) {
        let count = 0;
        for (let i = 0; i < times.length; i++) {
            let sourceVertex = times[i][0];
            let targetVertex = times[i][1];
            let targetWeight = times[i][2];
            if (distances[targetVertex] > distances[sourceVertex] + targetWeight) {
                distances[targetVertex] = distances[sourceVertex] + targetWeight;
                count++
            }
        }
        if (count === 0) break;
    }

    console.log(JSON.stringify(distances));

    let maxDist = Math.max(...distances);

    return maxDist === Infinity ? -1 : maxDist;
};


/*const times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2;*/  // expected 2
/*const times = [[1,2,1]], n = 2, k = 1;*/   // expected 1
/*const times = [[1,2,1]], n = 2, k = 2;*/   // expected -1;
/*const times = [[1,2,1],[2,1,3]], n =2, k =2;*/   // expected 3
/*const times = [[1,2,1],[2,3,2],[1,3,2]], n = 3, k = 1;*/   // expected 2
/*const times = [[1,2,9],[1,4,2],[2,5,1],[4,2,4],[4,5,6],[3,2,3],[5,3,7],[3,1,5]], n = 5, k = 1;*/    // expected 14
/*const times = [[1,2,8],[3,1,3]], n = 3, k = 1;*/   // expected -1
/*const times = [[1,2,1],[2,3,2],[1,3,2]], n =3, k = 1;*/   // expected 2
/*const times = [[1,2,1],[2,3,7],[1,3,4],[2,1,2]], n = 3, k = 2;*/    // expected 6
const times = [[3,5,78],[2,1,1],[1,3,0],[4,3,59],[5,3,85],[5,2,22],[2,4,23],[1,4,43],[4,5,75],[5,1,15],[1,5,91],[4,1,16],[3,2,98],[3,4,22],[5,4,31],[1,2,0],[2,5,4],[4,2,51],[3,1,36],[2,3,59]],
    n = 5, k = 5;   // expected 31


console.log(networkDelayTimeBellmanFord(times, n, k))
