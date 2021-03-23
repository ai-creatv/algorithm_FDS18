class Vertex {
    constructor(value, adjList=new Array()) {
        this.value = value;
        this.adjList = adjList;
    }
}

class Graph {
    constructor() {
        this.vertices = new Array();
    }

    insert(value, adjList) {
        
    }

    bfs(vertexInd, value) {
        
    }

    dfs(vertexInd, value) {
        
    }
}

const graph = new Graph();
graph.insert(0, []);
graph.insert(1, [0]);
graph.insert(2, [1]);
graph.insert(3, [2]);
graph.insert(4, [0, 2, 3]);

console.log(graph.bfs(0));
console.log(graph.dfs(0));
