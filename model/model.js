import Queue from "./collections/Queue.js";

class SnakeBody {
    row
    col
    constructor(row, col) {
        this.row = row
        this.col = col
    }
}

export default class Model {
    grid
    queue
    constructor() {
        this.queue = new Queue()
    }
    getGrid() {
        return this.grid
    }
    getQueue() {
        return this.queue
    }

    initQueue() {
        this.queue.enQueue(new SnakeBody(5, 5))
        this.queue.enQueue(new SnakeBody(5, 6))
        this.queue.enQueue(new SnakeBody(5, 7))
    }
    updateGrid() {
        for (let r = 0; r < this.grid.length; r++) {
            for (let c = 0; c < this.grid[r].length; c++) {
                this.grid[r][c] = this.isSnakeBody(r, c) ? 1 : 0;
            }
        }
    }
    initGrid(rowAmount, colAmount) {
        this.initQueue()
        this.grid = []; // init list
        for (let r = 0; r < rowAmount; r++) {
            this.grid[r] = []; //init list row
            for (let c = 0; c < colAmount; c++) {
                //this.grid[r][c] = 0
                this.grid[r][c] = this.isSnakeBody(r, c) ? 1 : 0;
            }
        }
        return this.grid;
    }

    isSnakeBody(row, col) {
        let node = this.queue.list.head
        while (node) {
            if (node.data.row === row && node.data.col === col) {
                return true;
            }
            node = node.next;
        }
        return false;
    }
    newHead(row, col) {
        this.queue.enQueue(new SnakeBody(row, col))
    }
    removeTail(){
        this.queue.deQueue()
    }
}