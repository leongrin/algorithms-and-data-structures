class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){

        let index = this.values.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index -1) / 2);
            if (this.values[index] > this.values[parentIndex]) {
                [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            } else if (this.values[index] <= this.values[parentIndex]) break
            index = parentIndex;
        }
        /*let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }*/
    }

    extractMax() {
        console.log(`this.values 1 => ${this.values}`);
        this.values[0] = this.values.pop();
        console.log(`this.values 2 => ${this.values}`);
        this.sinkDown();

    }

    sinkDown() {
        let index = 0;
        while(true) {
            let one = 2 * index + 1;
            console.log(`one => ${one}`);
            let two = 2 * index + 2;
            console.log(`two => ${two}`);
            const largerVal = Math.max(this.values[one] || 0, this.values[two] || 0);
            console.log(`largerVal => ${largerVal}`);
            if (this.values[index] >= largerVal || 0) {
                break;
            } else {
                const largerValIndex = this.values.indexOf(largerVal);
                console.log(`largerValIndex => ${largerValIndex}`);
                let valueIndex = this.values[index];
                console.log(`valueIndex => ${valueIndex}`)
                this.values[index] = this.values[largerValIndex];
                this.values[largerValIndex] = valueIndex;
                index = largerValIndex;
                console.log(`index => ${index}`);
            }
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
console.log(heap.values)



