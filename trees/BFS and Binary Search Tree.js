
class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(node) {
        if (this.root === null) {
            this.root = node;
            return this;
        }
        let nodeToCompare = this.root;
        while (true) {
            if (node.val === nodeToCompare.val) return null;

            if (node.val > nodeToCompare.val) {
                if (nodeToCompare.right === null) {
                    nodeToCompare.right = node;
                    return this;
                }
                nodeToCompare = nodeToCompare.right;
            }

            if (node.val < nodeToCompare.val) {
                if (nodeToCompare.left === null) {
                    nodeToCompare.left = node;
                    return this;
                }
                nodeToCompare = nodeToCompare.left;
            }
        }
    }

    find(node) {
        if (this.root === null) return false;
        let nodeToCompare = this.root;
        while (nodeToCompare !== null) {
            if (node.val === nodeToCompare.val) return true;
            if (node.val > nodeToCompare.val) nodeToCompare = nodeToCompare.right;
            else nodeToCompare = nodeToCompare.left;
        }
        return false;
    }

    // https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344808#overview
    BFS() {
        let queue = [this.root];
        let visited = [];

        while (queue.length) {
            let curr = queue.shift();
            visited.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        return visited;
    }

    BfsPerLevel() {
        let visited = [],
            queue = [this.root];

        while (queue.length) {
            let row = [];
            let rowSize = queue.length;

            while (rowSize > 0) {
                let current = queue.shift();
                row.push(current.val);
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
                rowSize--;
            }
            visited.push(row);
        }

        return visited
    }


    // https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12429754#questions
    BFSRecursive(queue, visited) {
        if (!queue.length) return visited;
        let curr = queue.shift();
        visited.push(curr.val);
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
        return this.BFSRecursive(queue, visited)
    }



    // https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11082106#overview
    DFSPreOrder() {
        let data = [];
        function traverseGetData(node) {
            data.push(node.val);
            if(node.left) traverseGetData(node.left);
            if(node.right) traverseGetData(node.right);
        }
        traverseGetData(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];
        function traverseGetData(node) {
            if(node.left) traverseGetData(node.left);
            if(node.right) traverseGetData(node.right);
            data.push(node.val);
        }
        traverseGetData(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];
        function traverseGetData(node) {
            if(node.left) traverseGetData(node.left);
            data.push(node.val);
            if(node.right) traverseGetData(node.right);
        }
        traverseGetData(this.root);
        return data;
    }


}

let maple = new BinarySearchTree();
maple.root = new Node(10);
maple.insert(new Node(6));
maple.insert(new Node(15));
maple.insert(new Node(3));
maple.insert(new Node(8));
maple.insert(new Node(20));
console.log(maple.BFS());
console.log(maple.BfsPerLevel());
console.log(maple.BFSRecursive([maple.root], []));
/*console.log(maple.DFSInOrder());*/
/*maple.BFS();*/
/*console.log(maple.find(new Node(15)))
console.log(maple);*/
