
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.printList()
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }

    insert (index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        const leader = this.traverseToIndex(index - 1);
        const later = leader.next;
        leader.next = newNode;
        newNode.next = later;
        this.length++
        return this.printList()
    }

    remove(index) {
        if (index >= this.length) {
            const leader = this.traverseToIndex(this.length - 2);
            leader.next = null;
            this.tail = leader;
            this.length--;
            return
        }

        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return
        }

        const leader = this.traverseToIndex(index - 1);
        leader.next = leader.next.next;
        this.length--;
    }

    get(index) {

    }

    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    reverseNew() {
        let prev = null;
        let next = null;

        while (this.head !== null) {
            next = this.head.next;
            this.head.next = prev;
            prev = this.head;
            this.head = next;
        }

        console.log(prev)

        return prev;
    }

    /*
    Input: Head of following linked list
    1->2->3->4->NULL
    Output: Linked list should be changed to,
    4->3->2->1->NULL
    */

    reverseColt() {
        let curr = this.head;
        this.head = this.tail;
        this.tail = curr;

        let next = null;
        let prev = null;

        while(curr !== null) {
            // Before changing next of current, store next node
            next = curr.next;
            // Now change next of current
            // This is where actual reversing happens
            curr.next = prev;
            // Move prev and curr one step forward
            prev = curr;
            curr = next;
        }
        return this;
    }

    reverse() {
        console.log('LETS REVERSE THE LIST')
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        console.log(`first => ${first.value}`)
        console.log(`this.tail => ${this.tail.value}`)

        this.tail = this.head;
        console.log(`this.tail => ${this.tail.value}`)
        this.printList()
        let second = first.next;
        console.log(`second => ${second.value}`)
        this.printList()
        console.log('LOOP!!!!!!!!')

        while(second) {
            const temp = second.next;
            console.log(`temp = second.next => ${temp ? temp.value : null}`)

            second.next = first;
            console.log(`second.next = first => ${second.next.value}`)

            first = second;
            console.log(`first = second => ${first ? first.value : null}`)

            second = temp;
            console.log(`second = temp => ${second ? second.value : null}`)
        }

        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}

let myLinkedList = new LinkedList(10);

console.log(myLinkedList.traverseToIndex(0))

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.remove(2)
console.log(' REMOVED')
myLinkedList.printList()
/*myLinkedList.reverseNew()*/
myLinkedList.reverseColt()
myLinkedList.printList()










/*const myLinkedList = new LinkedList(10);

console.log(myLinkedList);

myLinkedList.append(5);

console.log(myLinkedList)

myLinkedList.append(16);

console.log(myLinkedList)

myLinkedList.prepend(1);

console.log(myLinkedList)

myLinkedList.printList()

myLinkedList.insert(200, 99);

console.log(myLinkedList)

myLinkedList.printList()

myLinkedList.remove(2);

myLinkedList.printList()

myLinkedList.remove(0);

myLinkedList.printList()

myLinkedList.reverse()*/








