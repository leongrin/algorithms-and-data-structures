class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {  // it is a max heap because a > b
        this._heap = [];
        this._comparator = comparator;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    _leftChild(idx) {
        return idx * 2 + 1;
    }

    _rightChild(idx) {
        return idx * 2 + 2;
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    _compare(i, j) {
        return this._comparator(this.heap[i], this.heap[j]);
    }

    push(value) {
        this.heap.push(value);
        this._siftUp();

        return this.size();
    }

    _siftUp() {
        let nodeIdx = this.size() - 1;

        while (nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
            this._swap(nodeIdx, this._parent(nodeIdx));
            nodeIdx = this._parent(nodeIdx); // in order for the loop to continue
        }
    }

    pop() {
        if (this.size() > 1) {
            this._swap(0, this.size() - 1);
        }

        const poppedValue = this.heap.pop();
        this._siftDown();
        return poppedValue;
    }

    _siftDown() {
        let nodeIdx = 0;

        while (
            (this._leftChild(nodeIdx) < this.size() &&
                this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
            (this._rightChild(nodeIdx) < this.size() &&
                this._compare(this._rightChild(nodeIdx), nodeIdx))
            ) {
            const greaterChildIdx =
                this._rightChild(nodeIdx) < this.size() &&
                this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
                    ? this._rightChild(nodeIdx)
                    : this._leftChild(nodeIdx);

            this._swap(greaterChildIdx, nodeIdx);
            nodeIdx = greaterChildIdx;
        }
    }
}

const pq = new PriorityQueue();
pq.push(15);
pq.push(12);
pq.push(50);
pq.push(7);
pq.push(40);
pq.push(22);

while(!pq.isEmpty()) {
    console.log(pq.pop());
}
