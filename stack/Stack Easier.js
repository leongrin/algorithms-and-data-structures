class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(val) {
        this.storage[this.size] = val;
        this.size++;
    }

    pop() {
        let top = this.storage[this.size - 1];
        delete this.storage[this.size - 1];
        this.size--;
        return top;
    }

    peek() {
        return this.storage[this.size - 1];
    }

    getSize() {   // check if it is empty
        return this.size === 0;
    }

    empty() {
        this.size = 0;
    }
}
