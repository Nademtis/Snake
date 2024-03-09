import LinkedList from "./linkedList.js"

export default class Queue {
    #list
    constructor() {
        this.#list = new LinkedList()
    }
    sayHello() {
        console.log("queue says hi");
    }

    enQueue() {
        //enqueue - add to tail
        this.#list.addLast()
    }
    //dequeue - remove from head
    deQueue(){
        this.#list.removeFirst()
    }
    //peek - return head without removing or adding
    peek(){
        return this.#list.head
    }
    
    //isEmpty
    //size

}