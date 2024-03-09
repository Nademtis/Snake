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
    gridColAmount = 10;
    gridRowAmount = 10;


    constructor() {
        this.model = new Model()
        this.view = new View(this)
    }

    tick() {

        //check if berry

        this.handleSnakeMovement();

        this.model.updateGrid()
        this.view.showGrid(this.model.getGrid()) //print new model
        setTimeout(this.tick.bind(this), 300); //make sure the next tick has the same refference to this controller
    }
    handleSnakeMovement() {
        const newHead = this.model.queue.peek().data;

        switch (this.direction) {
            case "up":
                this.model.newHead(newHead.row - 1, newHead.col);
                break;
            case "down":
                this.model.newHead(newHead.row + 1, newHead.col);
                break;
            case "left":
                this.model.newHead(newHead.row, newHead.col - 1);
                break;
            case "right":
                this.model.newHead(newHead.row, newHead.col + 1);
                break;
        }

        // Remove tail if no fruit
        this.model.removeTail()
    }
    checkCollision() {

    }
    init() {
        document.addEventListener("keydown", (event) => this.keyPress(event)) // without using arrow function the method would not have the correct refference -->
        document.addEventListener("keyup", (event) => this.keyUp(event))      // to this object. so inside keyPress "this.controls" would not work, since it doesnt point at

        let grid = this.model.initGrid(this.gridRowAmount, this.gridColAmount)
        this.view.showGrid(grid)

        this.tick()
    }

    initGrid() {
        this.view.showGrid(this.gridRowAmount, this.gridColAmount)
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