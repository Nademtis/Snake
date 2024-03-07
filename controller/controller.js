"use strict"

import Model from "../model/model.js"
import View from "../view/view.js"

export default class Controller {
    controls = {
        up: false,
        down: false,
        right: false,
        left: false
    }
    direction = "left" //hardcoded to left

    constructor() {
        this.model = new Model()
        this.view = new View(this)
    }
    init() {
        document.addEventListener("keydown", (event) => this.keyPress(event)) // without using arrow function the method would not have the correct refference
        document.addEventListener("keyup", (event) => this.keyUp(event))      // to this object. so inside keyPress "this.controls" would not work, since it doesnt point at

        console.log("hi from controller");
        this.view.sayHello()
        this.model.sayHello()

    }

    keyPress(event) {
        //console.log(event);
        switch (event.key) {
            case "ArrowRight": this.controls.right = true; break
            case "ArrowLeft": this.controls.left = true; break
            case "ArrowUp": this.controls.up = true; break
            case "ArrowDown": this.controls.down = true; break
        }
        if (this.controls.right) this.direction = "right"
        else if (this.controls.left) this.direction = "left"
        else if (this.controls.up) this.direction = "up"
        else if (this.controls.down) this.direction = "down"
    }

    keyUp(event) {
        switch (event.key) {
            case "ArrowRight": this.controls.right = false; break
            case "ArrowLeft": this.controls.left = false; break
            case "ArrowUp": this.controls.up = false; break
            case "ArrowDown": this.controls.down = false; break
        }
    }
}