// 207. Course Schedule
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take
// course bi first if you want to take course ai.
//
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.


const canFinishBruteForce = (n, prerequisites) => {
    // example of prerequisites = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]
    const adjList = [...Array(n)].map(() => []);

    for(let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i];
        adjList[pair[1]].push(pair[0])
    }

    console.log(`adjList => ${JSON.stringify(adjList)}`);

    // adjList = [ [ 1 ], [ 2 ], [], [ 0, 4 ], [], [ 2, 3, 4 ] ]

    for(let v = 0; v < n; v++) {
        const queue = [];
        const seen = {};
        for(let i = 0; i < adjList[v].length; i++) {
            queue.push(adjList[v][i]);
        }

        while(queue.length) {
            const current = queue.shift();
            seen[current] = true;

            if(current === v) return false;
            const adjacent = adjList[current];

            for(let i = 0; i < adjacent.length; i++) {
                const next = adjacent[i];
                if(!seen[next]) {
                    queue.push(next);
                }
            }
        }
    }

    return true;
}


// BEST AND SIMPLER APPROACH
const canFinishTopologicalOrder = (n, prerequisites) => {
    const inDegreeList = Array(n).fill(0);
    const childrenOfEachParentList = inDegreeList.map(() => []);

    // Building / Filling the inDegreeList and childrenOfEachParentList
    for(let i = 0; i < prerequisites.length; i++) {
        inDegreeList[prerequisites[i][0]]++;
        let parent = prerequisites[i][1];
        let child = prerequisites[i][0];
        childrenOfEachParentList[parent].push(child)
    }

    console.log(`childrenOfEachParentList => ${JSON.stringify(childrenOfEachParentList)}`);

    const stack = []; // List of vertexes with InDegree zero

    for(let i = 0; i < inDegreeList.length; i++) {
        if(inDegreeList[i] === 0) {
            stack.push(i);
        }
    }

    let count = 0;

    while(stack.length) {
        const current = stack.pop();
        count++;

        const childrenList = childrenOfEachParentList[current]; // the children list of the vertex with zero inDegrees.

        for(let i = 0; i < childrenList.length; i++) {
            const child = childrenList[i];
            inDegreeList[child]--;  // removing one InDegree count of each child that has the parent with zero inDegrees
            if(inDegreeList[child] === 0) {
                stack.push(child);
            }
        }
    }

    return count === n;

};


/*const numCourses = 2, prerequisites = [[1,0]];*/  // expected true

/*const numCourses = 2, prerequisites = [[1,0],[0,1]];*/  // expected false

/*const numCourses = 3, prerequisites = [[1,0],[0,2],[2,1]];*/  // expected false

/*const numCourses = 5, prerequisites = [[1,4],[2,4],[3,1],[3,2]];*/  // expected true

const numCourses = 6, prerequisites = [[1,0],[2,1],[2,5],[0,3],[4,3],[3,5],[4,5]];   // expected true

/*const numCourses = 20, prerequisites = [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]];*/ // expected false


console.log(canFinishTopologicalOrder(numCourses, prerequisites));

