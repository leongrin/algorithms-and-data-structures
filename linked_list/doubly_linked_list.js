
class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = poppedNode.prev;
            poppedNode.prev = null;
            prev.next = null;
            this.tail = prev;
        }
        this.length--;
        return poppedNode;

    }

    shift() {
        if (!this.head) return undefined;
        let shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let next = shiftedNode.next;
            shiftedNode.next = null;
            next.prev = null;
            this.head = next;
        }
        this.length--;
        return shiftedNode;
    }

    unShift(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let oldHead = this.head;
            oldHead.prev = node;
            node.next = oldHead;
            this.head = node;
        }
        this.length++;
        return this;
    }

    set(value, index) {
        let nodeToBeChanged = this.get(index);
        nodeToBeChanged.val = value;
        return nodeToBeChanged;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) return null;
        if (index === 0) return this.unShift(value);
        if (index === this.length) return this.push(value);
        let node = new Node(value);
        let prev = this.get(index - 1);
        let next = prev.next;
        prev.next = node;
        node.next = next;
        node.prev = prev;
        next.prev = node;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length - 1) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        removedNode.next.prev = removedNode.prev;
        removedNode.prev.next = removedNode.next;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

    get(index) {
        if (!this.head) return null;
        if (index < 0 || index >= this.length) return null;
        if (this.length === 1) return this.head;
        if (index <= (this.length / 2)) {
            return this.traverseAsc(index)
        } else {
            return this.traverseDesc(index)
        }


    }

    traverseAsc(index) {
        console.log('Traversing Asc');
        let counter = 0;
        let currentNode = this.head;
        while (counter < index) {
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    traverseDesc(index) {
        console.log('Traversing Desc');
        let counter = this.length - 1;
        let currentNode = this.tail;
        while (counter > index) {
            counter--;
            currentNode = currentNode.prev;
        }
        return currentNode;
    }
}


let list = new DoublyLinkedList();
list.push(10);
list.push(15);
list.push(18);
list.push(20);
console.log(list);
console.log(list.pop())
console.log(list);
console.log(list.shift())
console.log(list);
list.unShift(50)
console.log(list);
console.log(list.get(1));
list.set('Changed Value', 1);
console.log(list);
list.insert(500, 1);
console.log(list);
console.log(list.remove(1))
console.log(list);






let first = new Node(12);
first.next = new Node(13);
first.next.prev = first;











