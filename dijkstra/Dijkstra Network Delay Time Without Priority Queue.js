// 743. Network Delay Time
// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as
// directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes
// for a signal to travel from source to target.
//
// We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal.
// If it is impossible for all the n nodes to receive the signal, return -1.


const networkDelayTime = (times, n, k) => {
    const childrenOfParentsList = [...Array(n + 1)].map(() => []);
    for (let i = 0; i < times.length; i++) {
        let parent = times[i][0];
        let child = times[i][1];
        let count = times[i][2];
        childrenOfParentsList[parent].push([child, count]);
    }

    console.log(`childrenOfParentsList => ${JSON.stringify(childrenOfParentsList)}`);

    const bestTimeList = Array(n + 1).fill(Infinity);

    const checkedVertexes = new Set();

    bestTimeList[k] = 0;
    bestTimeList[0] = 0;
    checkedVertexes.add(0);

    updateBestTimeList(k);

    function updateBestTimeList(parentId) {
        for (let item of childrenOfParentsList[parentId]) {
            let childTarget = item[0];
            if (checkedVertexes.has(childTarget)) continue;
            console.log(`childTarget => ${childTarget} and parentId => ${parentId}`);
            let timeToTarget = item[1];
            bestTimeList[childTarget] = Math.min(bestTimeList[childTarget], bestTimeList[parentId] + timeToTarget);
            console.log(`bestTimeList[childTarget] => ${bestTimeList[childTarget]}`);
        }

        checkedVertexes.add(parentId);
    }

    console.log(`bestTimeList => ${JSON.stringify(bestTimeList)}`);

    function returnTheIndexOfTheSmallestTime(bestTimeArray) {
        let index;
        let bestTime = Infinity;
        for (let i = 0; i < bestTimeArray.length; i++) {
            if (!checkedVertexes.has(i) && bestTimeArray[i] < bestTime) {
                bestTime = bestTimeArray[i];
                index = i;
            }
        }
        return index;
    }

    while (true) {
        const nextVertexToCheck = returnTheIndexOfTheSmallestTime(bestTimeList);
        console.log(`nextVertexToCheck => ${nextVertexToCheck}`)
        if (nextVertexToCheck) {
            console.log('here')
            updateBestTimeList(nextVertexToCheck);
        } else {
            break;
        }
    }

    console.log(JSON.stringify(bestTimeList));

    let maxValue = 0;

    for (let item of bestTimeList) {
        if (item === Infinity) {
            maxValue = -1;
            break;
        } else {
            maxValue = Math.max(maxValue, item);
        }
    }

    return maxValue;

};




/*const times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2;*/  // expected 2
/*const times = [[1,2,1]], n = 2, k = 1;*/   // expected 1
/*const times = [[1,2,1]], n = 2, k = 2;*/   // expected -1;
/*const times = [[1,2,1],[2,1,3]], n =2, k =2;*/   // expected 3
/*const times = [[1,2,1],[2,3,2],[1,3,2]], n = 3, k = 1;*/   // expected 2
/*const times = [[1,2,9],[1,4,2],[2,5,1],[4,2,4],[4,5,6],[3,2,3],[5,3,7],[3,1,5]], n = 5, k = 1;*/    // expected 14
/*const times = [[1,2,8],[3,1,3]], n = 3, k = 1;*/   // expected -1
/*const times = [[1,2,1],[2,3,2],[1,3,2]], n =3, k = 1;*/   // expected 2
const times = [[1,2,1],[2,3,7],[1,3,4],[2,1,2]], n = 3, k = 2;    // expected 6


console.log(networkDelayTime(times, n, k))






