import Queue from "./collections/Queue.js";

export default class Model {
    queue
    constructor() {
        this.queue = new Queue()
    }
    sayHello() {
        console.log("hi from model");
        
    }


}