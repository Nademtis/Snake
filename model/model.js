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
    berryLocation = [{ berryRow: 0, berryCol: 0 }]
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
                if (this.isSnakeBody(r, c)) {
                    this.grid[r][c] = 1;
                } else if (this.grid[r][c] !== 2) { // only update this cell, if it's not berry
                    this.grid[r][c] = 0;
                }
            }
        }
    }
    initGrid(rowAmount, colAmount) {
        this.initQueue()
        this.grid = []; // init list
        for (let r = 0; r < rowAmount; r++) {
            this.grid[r] = []; //init list row
            for (let c = 0; c < colAmount; c++) {
                this.grid[r][c] = this.isSnakeBody(r, c) ? 1 : 0;
            }
        }
        this.generateBerry()
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
        const numRows = this.grid.length;
        const numCols = this.grid[0].length;

        col = (col + numCols) % numCols;
        row = (row + numRows) % numRows;

        this.queue.enQueue(new SnakeBody(row, col))
    }
    removeTail() {
        this.queue.deQueue()
    }
    generateBerry() {
        let numRows = this.grid.length;
        let numCols = this.grid[0].length;

        let berryRow, berryCol;

        do {
            berryRow = Math.floor(Math.random() * numRows);
            berryCol = Math.floor(Math.random() * numCols);
        } while (this.isSnakeBody(berryRow, berryCol));

        this.berryLocation.berryRow = berryRow;
        this.berryLocation.berryCol = berryCol;
        this.grid[berryRow][berryCol] = 2;
    }
    hitBerry(head) {
        if (head.row == this.berryLocation.berryRow && head.col == this.berryLocation.berryCol) {
            console.log("hit berry");
            return true
        }
        else
            return false
    }
}