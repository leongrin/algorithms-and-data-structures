// Given the root of a binary tree, return its maximum depth.
//
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

function maxDepth(root) {

    let maxDepth = 0;

    let DFS = (node, level) => {
        if (!node) return; // leaf node
        if (level > maxDepth) maxDepth = level;
        DFS(node.left, level + 1);
        DFS(node.right, level + 1);
    }

    DFS(root, 1);

    return maxDepth;
}


console.log(maxDepth([3,9,20,null,null,15,7]))

// Input: root = [3,9,20,null,null,15,7]
// Output: 3



