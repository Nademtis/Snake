"use strict"
export default class View {

    controller;

    constructor(controller) {
        this.controller = controller;

    }
    sayHello() {
        console.log("hi from view");
    }
    showGrid(list) {
        const gridContainer = document.querySelector("#grid_table");
        gridContainer.innerHTML = ""

        for (let r = 0; r < list.length; r++) {
            const tr = document.createElement("tr")

            for (let c = 0; c < list[r].length; c++) {
                const td = document.createElement("td")
                switch (list[r][c]) {
                    case 0: td.classList.add("cell"); break //cell
                    case 1: break; //snake
                    case 2: break; //fruit
                }
                tr.appendChild(td);
            }
            gridContainer.appendChild(tr);
        }
    }
    applyCSS(cell) {

    }
}