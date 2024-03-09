import Queue from "./collections/Queue.js";

export default class Model {
    queue
    list
    constructor() {
        this.queue = new Queue()
    }
    sayHello() {
        console.log("hi from model");
        
    }
    initList(rowAmount, colAmount) {
        this.list = []; // init list
        for (let r = 0; r < rowAmount; r++) {
            this.list[r] = []; //init list row
            for (let c = 0; c < colAmount; c++) {
                this.list[r][c] = 0
            }
        }
        console.table(this.list)
        return this.list;
    }
}