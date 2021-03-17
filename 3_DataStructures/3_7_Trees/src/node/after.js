class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(array) {
        const nodeArray = array.map(el => new Node(el));

        for (let i = 0; i < nodeArray.length; i++) {
            const leftInd = i * 2 + 1;
            const rightInd = i * 2 + 2;
            if (leftInd < nodeArray.length) {
                nodeArray[i].left = nodeArray[leftInd];
            }
            if (rightInd < nodeArray.length) {
                nodeArray[i].right = nodeArray[rightInd];
            }
        }

        this.root = nodeArray[0];
    }

    preorder() {

    }

    inorder() {
        
    }

    bfs(value) {
        
    }

    dfs(value) {
        
    }
}

tree = new BinaryTree([0,1,2,3,4,5,6,7,8,9,10,11,12])
tree.preorder()
tree.inorder()
tree.postorder()

console.log(tree.dfs(15))
console.log(tree.dfs(11))

console.log(tree.bfs(6))
console.log(tree.bfs(17))