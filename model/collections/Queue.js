import LinkedList from "./linkedList.js"

export default class Queue{
    list
    constructor (){
        this.list = new LinkedList()
    }
    sayHello(){
        console.log("queue says hi");
    }
    
}