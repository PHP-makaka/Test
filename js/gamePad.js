document.addEventListener('keyup', moveTank);
let keyMove = {
    'ArrowLeft': ["moveLeft", "left"],
    'ArrowUp': ["moveTop", "top"],
    'ArrowDown': ["moveDown", "down"],
    'ArrowRight': ["moveRigh", "right"]
}

function moveTank(event) {

    for (key in keyMove) {
        if (key == event.code) {
            coolisionBlock(tank_Main, keyMove[key][0], keyMove[key][1], tank_Main.tankHtml)
        }
    }
    if (event.keyCode == 32) {
        // console.log(event.keyCode)
        console.log(tank_Main.left)
        console.log(tank_Main.top)
        if (tank_Main.buliev_faer) {
            tank_Main.buliev_faer = false
            let fier_boll_Tank = tank_Main.faer()
            return faerMove(fier_boll_Tank,tank_Main,[tank_one,tank_two,tank_tree])
        }
    }
    // if (event.code == 'ArrowLeft') {
    //     coolisionBlock("moveLeft","left")
    // } else if (event.code == 'ArrowUp') {
    //     coolisionBlock("moveTop","top")
    // } else if (event.code == 'ArrowDown') {
    //     coolisionBlock("moveDown","top")
    // } else if (event.code == 'ArrowRight') {
    //     coolisionBlock("moveRigh","left")
    // }

}