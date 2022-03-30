
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
        let data = [];
        while(queue.length) {
            data.push(queue[0].val);
            visited.push(queue.shift());
            if (visited[visited.length - 1].left) queue.push(visited[visited.length - 1].left);
            if (visited[visited.length - 1].right) queue.push(visited[visited.length - 1].right);
        }

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
maple.BFS();
/*console.log(maple.find(new Node(15)))
console.log(maple);*/
