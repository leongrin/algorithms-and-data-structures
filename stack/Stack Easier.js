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

    getSize() {
        return this.size;
    }

    empty() {
        return this.getSize() === 0;
    }
}
