// var tank_Vrag = document.getElementsByClassName("game-object game-object__enemy-tank")

// let mapSize = document.getElementById("game-map")

class Tanks {

    constructor(tankHtml_ID) {
        this.tankHtml_ID = tankHtml_ID
        this.tankHtml =document.getElementById(this.tankHtml_ID)
        this.top = Number(this.tankHtml.style.top.replace("px", ' '));
        this.left = Number(this.tankHtml.style.left.replace("px", ' '));
        this.orientation = 0;
        this.maxTop = $mainGameElemetn.offsetHeight - 64;
        this.maxLeft = $mainGameElemetn.offsetWidth - (64 * 2);
        this.lastSide = "moveDown";
        this.lastSideWh = "down";
        this.buliev_faer = true
        this.default_TOP =Number(this.tankHtml.style.top.replace("px", ' '))
        this.default_LEFT = Number(this.tankHtml.style.left.replace("px", ' '))
    }


    moveDown() {
        if (this.top >= this.maxTop) {
            this.boliev = true
        } else {
            this.top += 64;
            this.orientation = 180
        }
    }

    moveTop() {
        if (this.top <= 0) {
            this.boliev = true

        } else {
            this.top -= 64;
            this.orientation = 0
        }
    }

    moveRigh() {
        if (this.left > this.maxLeft) {
            this.boliev = true
        } else {
            this.left += 64
            this.orientation = 90
        }
    }

    moveLeft() {
        if (this.left <= 0) {
            this.boliev = true

        } else {
            this.left -= 64
            this.orientation = -90
        }
    }

    faer() {
        let div = document.createElement('div');
        div.className = "faer";
        div.id = `faerboll_${this.tankHtml_ID}`;
        div.style.top = `${this.top+32}px`
        div.style.left = `${this.left + 32}px`
        $mainGameElemetn.append(div)
        let fier_boll_Tank = new FaersObj(this.top, this.left, this.orientation,div.id)
        return fier_boll_Tank
    }

    arrMove() {

        // let arr = [this.moveLeft, this.moveRigh, this.moveDown, this.moveTop]
        // return arr[Math.floor(Math.random() * Math.floor(4))].call(this)
    }

}


let tank_Main = new Tanks("object__player-tank")

let tank_one=  new Tanks("enemy_1")
let tank_two=  new Tanks("enemy_2")
let tank_tree=  new Tanks("enemy_3")



// let topMainTank = tankMain.style.top.replace("px", ' ')
// let leftMainTank = tankMain.style.left.replace("px", ' ')

// console.log(leftMainTank)

// let fier_boll_Tank = new FaersObj()


// let topVrag_one = tank_Vrag[0].style.top.replace("px", ' ')
// let leftVrag_one = tank_Vrag[0].style.left.replace("px", ' ')

// let topVrag_two = tank_Vrag[1].style.top.replace("px", ' ')
// let leftVrag_two = tank_Vrag[1].style.left.replace("px", ' ')

// let topVrag_tree = tank_Vrag[2].style.top.replace("px", ' ')
// let leftVrag_tree = tank_Vrag[2].style.left.replace("px", ' ')


// let arrTanksVrag = {
//     "tank_one": "tank_one1",
//     "tank_two": new Tanks(Number(topVrag_two), Number(leftVrag_two)),
//     "tank_tree": new Tanks(Number(topVrag_tree), Number(leftVrag_tree))
// }