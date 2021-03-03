if(window.DeviceMotionEvent){
    window.addEventListener("devicemotion", motion, false);
}else{
    console.log("DeviceMotionEvent is not supported");
}

alert("hello!")
function motion(event){

    console.log("Accelerometer: "
        + event.accelerationIncludingGravity.x + ", "
        + event.accelerationIncludingGravity.y + ", "
        + event.accelerationIncludingGravity.z
    );
}

if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", orientation, false);
}else{
    console.log("DeviceOrientationEvent is not supported");
    }

function orientation(event){
    alert("Magnetometer: "
        + event.alpha + ", "
        + event.beta + ", "
        + event.gamma
    )
    console.log("Magnetometer: "
        + event.alpha + ", "
        + event.beta + ", "
        + event.gamma
    );
}

// var lastDigit = function (str1, str2) {
//     const big1 = BigInt(str1)
//     const big2 = BigInt(str2)
//     let arr = String(big1 ** big2)
//     console.log(arr)
//     return Number(arr[arr.length - 1]);
//
// }
//
// lastDigit("10", "10000")

// var text = document.getElementById("score")
// class SnakesLadders {
//     player1 = {
//         score: 0,
//         step: 1
//     };
//     player2 = {
//         score: 0,
//         step: 0
//     };
//     who = {
//         player: "",
//         score: 0
//     }
//     objJump = {
//         2: 38,
//         7: 14,
//         8: 31,
//         15: 26,
//         28: 84,
//         21: 42,
//         36: 44,
//         51: 67,
//         78: 98,
//         71: 91,
//         87: 94,
//         /////
//         16: 6,
//         49: 11,
//         46: 25,
//         62: 19,
//         64: 60,
//         74: 53,
//         89: 68,
//         92: 88,
//         95: 75,
//         99: 80
//
//     }
//
//     play(die1, die2) {
//
//         if (this.player1.step) {
//             this.player1.score += eval(die1 + die2)
//             if (die1 == die2) {
//                 this.jump(this.player1)
//             } else {
//                 this.jump(this.player1)
//                 this.player1.step = false
//                 this.player2.step = true
//             }
//         } else {
//             this.player2.score += eval(die1 + die2)
//             if (die1 == die2) {
//                 this.jump(this.player2)
//             } else {
//                 this.jump(this.player2)
//                 this.player2.step = false
//                 this.player1.step = true
//             }
//         }
//
//         // console.log("Player1 is on :", this.player1.score, "vs", "Player2 is on :", this.player2.score)
//         if (this.player1.step) {
//
//             console.log(" следующий ход 1Player")
//         } else {
//             console.log(" следующий ход 2player")
//         }
//         return (`${this.who.player} is on square ${this.who.score}`)
//     }
//
//     getCellValues() {
//         text.innerHTML += "////////GAME SCUARE////////// Player1: " + this.player1.score + "   *|||||||*  " + "Player2: " + this.player2.score + "<br/>"
//         var table = document.getElementById('mytable');
//         for (var r = 0, n = table.rows.length; r < n; r++) {
//             for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
//                 if (table.rows[r].cells[c].innerHTML == this.player1.score && this.player1.step == 1) {
//                     table.rows[r].cells[c].style.cssText = "background:red"
//                 } else if (table.rows[r].cells[c].innerHTML == this.player2.score && this.player2.step == 1) {
//                     table.rows[r].cells[c].style.cssText = "background:yellow"
//                 } else {
//                     table.rows[r].cells[c].style.cssText = "background:#4cfff7"
//
//                 }
//             }
//         }
//     }
//
//     gameOff() {
//         if (this.player2.score == 100 || this.player1.score == 100) {
//             console.log("конец")
//             return "End of the game"
//         } else if (this.player2.score > 100) {
//             this.player2.score = 100 - (this.player2.score - 100)
//             // console.log(this.player2.score)
//         } else if (this.player1.score > 100) {
//             this.player1.score = 100 - (this.player1.score - 100)
//             // console.log(this.player1.score)
//         } else {
//
//             console.log("////////GAME SCUARE Player1: " + this.player1.score + " //// " + "Player2: " + this.player2.score)
//
//             this.getCellValues()
//
//             if (this.player1.step) {
//                 this.who.player = "Player 1"
//                 this.who.score = this.player1.score
//                 // console.log("Ход первого игрока и его счёт :")
//                 // return (`Player 1 is on square ${this.player1.score}`)
//             } else if (this.player2.step) {
//                 this.who.player = "Player 2"
//                 this.who.score = this.player2.score
//                 // console.log("Ход Второго игрока и его сёт :")
//                 // return (`Player 2 is on square ${this.player2.score}`)
//
//             }
//         }
//
//     }
//
//     jump(player) {
//         for (let key in this.objJump) {
//             if (key == player.score) {
//                 player.score = this.objJump[key]
//             }
//         }
//         this.gameOff()
//
//     }
//
// };
// let game = new SnakesLadders()
// //
// // console.log(game.play(96, 1))
// // console.log(game.play(90, 2))
// // console.log(game.play(1, 1))
// // console.log(game.play(1, 3))
// let startClick = document.getElementById("playID")
// startClick.addEventListener('click', fun, false)
//
// function fun() {
//     let x = randomInteger(1, 6)
//     let y = randomInteger(1, 6)
//     // console.log(x,y)
//     text.innerHTML+= `<hr>Кости: ${x}, ${y} <br/><hr>`
//     game.play(x, y)
//     startClick.innerHTML = `Ход : ${game.who.player}`
//
// }
//
// function randomInteger(min, max) {
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
// }
