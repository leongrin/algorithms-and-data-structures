// 743. Network Delay Time
// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as
// directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes
// for a signal to travel from source to target.
//
// We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal.
// If it is impossible for all the n nodes to receive the signal, return -1.



let distances;

// Priority Queue implementation
class PriorityQueueMinHeap {
    constructor(){
        this.vertexIndexes = [];
    }

    enqueue(vertex) {
        console.log(`enqueue vertex => ${vertex}`);
        this.vertexIndexes.push(vertex);
        this.bubbleUp();
    }

    bubbleUp() {
        let currVertexIndex = this.vertexIndexes.length - 1;
        let parentIndex = Math.floor((currVertexIndex - 1) / 2);
        console.log(`bubbleUp, currVertexIndex => ${currVertexIndex}, this.values[currVertexIndex] => ${this.vertexIndexes[currVertexIndex]}`);
        console.log(`bubbleUp, parentIndex => ${parentIndex}, this.values[parentIndex] => ${this.vertexIndexes[parentIndex]}`);

        while (currVertexIndex > 0 && distances[parentIndex] > distances[currVertexIndex]) {
            [this.vertexIndexes[currVertexIndex], this.vertexIndexes[parentIndex]] = [this.vertexIndexes[parentIndex], this.vertexIndexes[currVertexIndex]];
            currVertexIndex = parentIndex;
            parentIndex = Math.floor((currVertexIndex - 1) / 2);
        }
        console.log(`this.values after bubbleUp => ${JSON.stringify(this.vertexIndexes)}`);
    }

    size() {
        return this.vertexIndexes.length;
    }

    dequeue() {
        const min = this.vertexIndexes[0];
        const end = this.vertexIndexes.pop();
        if(this.vertexIndexes.length > 0){
            this.vertexIndexes[0] = end;
            this.bubbleDown();
        }
        console.log(`dequeue min => ${min}`);
        console.log(`distances on dequeue => ${JSON.stringify(distances)}=================================================`);
        return min;
    }

    bubbleDown(currIndex = 0) {
        let leftIndex = 2 * currIndex + 1;
        let rightIndex = 2 * currIndex + 2;
        let swapIndex;
        if (this.vertexIndexes[leftIndex] && distances[leftIndex] < distances[currIndex]) swapIndex = leftIndex;
        if (this.vertexIndexes[rightIndex] && distances[rightIndex] < distances[leftIndex]) swapIndex = rightIndex;
        if (swapIndex) {
            [this.vertexIndexes[currIndex], this.vertexIndexes[swapIndex]] = [this.vertexIndexes[swapIndex], this.vertexIndexes[currIndex]];
            currIndex = swapIndex;
            this.bubbleDown(currIndex)
        }
        console.log(`this.vertexIndexes after bubbleDown => ${JSON.stringify(this.vertexIndexes)}`);
    }
}




const networkDelayTime = (times, n, k) => {
    distances = Array(n + 1).fill(Infinity);
    distances[k] = 0;
    distances[0] = 0;

    const minHeap = new PriorityQueueMinHeap();
    minHeap.enqueue(k);

    const childrenOfParentsList = [...Array(n + 1)].map(() => []);

    // Building the childrenOfParentsList
    for(let i = 0; i < times.length; i++) {
        const parent = times[i][0];
        const child = times[i][1];
        const weight = times[i][2];
        childrenOfParentsList[parent].push([child, weight]);
    }

    console.log(`childrenOfParentsList => ${JSON.stringify(childrenOfParentsList)}`);

    // Building the distances list to find the solution and keeping only with the remaining vertices to be checked.
    while(minHeap.size()) {
        const parentIndex = minHeap.dequeue();

        const children = childrenOfParentsList[parentIndex];
        console.log(`children of parentIndex => ${parentIndex} are => ${JSON.stringify(children)}`);

        for(let i = 0; i < children.length; i++) {
            const childIndex = children[i][0];
            const childWeight = children[i][1];
            console.log(`childIndex => ${childIndex}, childWeight => ${childWeight}, distances[parentIndex] => ${distances[parentIndex]}, distances[childIndex] => ${distances[childIndex]}`);
            if(distances[parentIndex] + childWeight < distances[childIndex]) {
                distances[childIndex] = distances[parentIndex] + childWeight;
                minHeap.enqueue(childIndex);
            }
        }
    }

    const ans = Math.max(...distances);

    console.log(`distances => ${JSON.stringify(distances)}`);
    console.log(minHeap.size());

    return ans === Infinity ? -1 : ans;
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


console.log(networkDelayTime(times, n, k))





/*const childrenOfParentsList = [...Array(n + 1)].map(() => []);

   // Once you send the children of a vertex to the queue, you add this vertex to this set not to be checked again.
   let checkedVertices = new Set();

   // Building the childrenOfParentsList
   for (let i = 0; i < times.length; i++) {

       let parent = times[i][0];
       let child = times[i][1];
       let timePath = times[i][2];

       childrenOfParentsList[parent].push([child, timePath]);
   }

   // Building the minTimeToVertex list, which is the essence of the Dijkstra algorithm.
   const minTimeToVertex = Array(n + 1).fill(Infinity);
   minTimeToVertex[0] = 0;
   minTimeToVertex[k] = 0;

   console.log(`childrenOfParentsList => ${JSON.stringify(childrenOfParentsList)}`);
   console.log(`maxTimeForNode => ${JSON.stringify(minTimeToVertex)}`);

   // The minHeap is a priority queue that the top value has the lowest priority number / distance.
   // This minHeap is an efficient way to guarantees that the next vertex to be traversed is always the one with
   // the lowest priority
   let minHeap = new PriorityQueueMinHeap();

   for (let item of childrenOfParentsList[k]) {
       item.push(minTimeToVertex[k]); // pushing the parent time value
       minHeap.enqueue(item);
       checkedVertices.add(k);
   }

   while (minHeap.size()) {
       let targetIndexAndTimeAndParentTime = minHeap.dequeue();
       let targetVertexIndex = targetIndexAndTimeAndParentTime[0];
       let targetVertexTime = targetIndexAndTimeAndParentTime[1];
       let parentTime = targetIndexAndTimeAndParentTime[2];

       if (checkedVertices.has(targetVertexIndex)) continue; // We will not verify twice the same vertex

       minTimeToVertex[targetVertexIndex] = Math.min(minTimeToVertex[targetVertexIndex], targetVertexTime + parentTime);

       for (let item of childrenOfParentsList[targetVertexIndex]) {
           item.push(minTimeToVertex[targetVertexIndex]);
           minHeap.enqueue(item);
       }

       checkedVertices.add(targetVertexIndex);
   }

   console.log(`minTimeToVertex => ${JSON.stringify(minTimeToVertex)}`);

   let maxValue = Math.max(...minTimeToVertex);

   return maxValue === Infinity ? -1 : maxValue;*/
