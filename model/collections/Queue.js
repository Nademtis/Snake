import LinkedList from "./linkedList.js"

export default class Queue {
    list // #makes it private from model
    constructor() {
        this.list = new LinkedList()
    }
    sayHello() {
        console.log("queue says hi");
    }

    enQueue(payload) {
        //enqueue - add to tail
        this.list.addFirst(payload)
    }
    //dequeue - remove from head
    deQueue(payload){
        this.list.removeLast(payload)
    }
    //peek - return head without removing or adding
    peek(){
        return this.list.head
    }

    //isEmpty
    //size

}