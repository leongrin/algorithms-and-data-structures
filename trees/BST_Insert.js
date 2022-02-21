class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;

        }

        let currentNode = this.root;

        while(true) {
            if (value === currentNode.value) {
                return null;
            }

            if (value > currentNode.value) {
                // Right
                if (!currentNode.right) {
                    currentNode.right = node;
                    return this;
                }
                currentNode = currentNode.right;
            }

            if (value < currentNode.value) {
                // Left
                if (!currentNode.left) {
                    currentNode.left = node;
                    return this;
                }
                currentNode = currentNode.left;
            }
        }

    }


    find(value) {
        if (!this.root) return null;

        let currentNode = this.root;

        while(true) {
            if (value === currentNode.value) {
                return currentNode;
            }

            if (value > currentNode.value) {
                // Right
                if (!currentNode.right) {
                    return null;
                }
                currentNode = currentNode.right;
            }

            if (value < currentNode.value) {
                // Left
                if (!currentNode.left) {
                    return null
                }
                currentNode = currentNode.left;
            }
        }
    }


}


//      10
//   5     13
// 2  7  11  16

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree.find(13));

/*console.log(tree);*/




