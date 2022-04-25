// 1376. Time Needed to Inform All Employees
// A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.
//
// Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1.
// Also, it is guaranteed that the subordination relationships have a tree structure.
//
// The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will
// inform their subordinates, and so on until all employees know about the urgent news.
//
// The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct
// subordinates can start spreading the news).
//
// Return the number of minutes needed to inform all the employees about the urgent news.

const numOfMinutes = (n, headID, managers, informTime) => {

    const adjList = managers.map(() => []); // building an empty multidimensional empty array

    // The manager is the index of the adjList, and its corresponding list has its subordinates. We are building this.
    for(let i = 0; i < n; i++) {
        if(managers[i] !== -1) adjList[managers[i]].push(i);
    }

    // DFS
    function traverse(node) {
        let maxTime = 0;

        for(let subordinate of adjList[node]) {
            maxTime = Math.max(maxTime, traverse(subordinate));
        }

        return maxTime + informTime[node];
    }
    
    return traverse(headID);
};


/*const n = 1, headID = 0, manager = [-1], informTime = [0]; */// expected 0

/*const n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0];*/ // expected 1

/*const n = 7, headID = 6, manager = [1,2,3,4,5,6,-1], informTime = [0,6,5,4,3,2,1];*/ // expected 21

/*const n = 10, headID = 3, manager = [8,9,8,-1,7,1,2,0,3,0], informTime = [224,943,160,909,0,0,0,643,867,722];*/ // expected 3665

const n = 11, headID = 4, manager = [5,9,6,10,-1,8,9,1,9,3,4], informTime = [0,213,0,253,686,170,975,0,261,309,337];  // expected 2560


console.log(numOfMinutes(n, headID, manager, informTime));
// -1 (idx 4) => 686
// 4 (idx 10) => 337
// 10 (idx 3) => 253
// 3 (idx 9) => 309
// 9 (idx 1, 6, 8) => 213, 975, 261
// 1, 6, 8 (idx 7, 2, 5) => 0, 0, 170
// 7, 2, 5 (idx 0) => 0
// 0 end




/*const queue = [headID];
    let layer = queue.length;
    let maxMinLayer = 0;
    let totalMinutes = 0;
    let layerIndexes = new Set();

    while(queue.length) {
        let curr = queue.shift();
        maxMinLayer = Math.max(maxMinLayer, informTime[curr]);
        layer--;
        layerIndexes.add(curr);
        if (layer === 0) {
            console.log(`layer => ${layer}, for maxMinLayer => ${maxMinLayer}, totalMinutes Before => ${totalMinutes}`);
            totalMinutes += maxMinLayer;
            console.log(`totalMinutes After => ${totalMinutes}`);
            maxMinLayer = 0;
            for (let i = 0; i < managers.length; i++) {
                if (layerIndexes.has(managers[i])) queue.push(i);
            }
            layerIndexes = new Set([]);
            layer = queue.length;
        }

    }

    return totalMinutes;*/



