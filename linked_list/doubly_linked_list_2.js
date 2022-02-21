
class Node{
    constructor(val){
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = val;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    unshift(value){
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    shift(){
        if (!this.head) return undefined;
        if (this.length === 1) {
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removedNode
        }
        let removedNode = this.head;
        let next = this.head.next;
        removedNode.next = null;
        this.head = next;
        this.head.prev = null;
        this.length--;
        return removedNode;
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

    set(index, value){
        let node = this.get(index);
        if (node) {
            node.val = value;
            return true;
        } else {
            return false;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let node = this.get(index);
        let beforeNode = node.prev;
        let afterNode = node.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }

    insert(value, index) {
        let node = new Node(value);
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.unshift(value);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = node;
        afterNode.prev = node;
        node.next = afterNode;
        node.prev = beforeNode;
        this.length++;
        return true
    }

    reverse() {
        let head = this.head;
        this.head = this.tail;
        this.tail = head;

        let next = null;
        let prev = null;

        while(head !== null) {
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        return this.traverse(index);
    }

    traverse(index) {
        let counter = 0;
        let node = this.head;
        while (counter < index) {
            counter++;
            node = node.next;
        }
        return node;
    }
}

let list = new DoublyLinkedList();

list.push(5).push(10).push(15).push(20);
console.log(list.remove(2).val); // 15
console.log(list.remove(100));  // undefined
console.log(list.length);  // 3
console.log(list.head.val);  // 5
console.log(list.head.next.val);  // 10
console.log(list.head.next.next.val);  // 20








