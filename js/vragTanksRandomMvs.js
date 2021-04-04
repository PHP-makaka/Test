let arr = [["moveLeft", "moveRigh", "moveDown", "moveTop"],
    ["left", "right", "down", "top"]];

function vragTanksRandomMvs(tank) {
    // console.log(tank.boliev)

    if (tank.boliev) {
        // console.log(tank.boliev, "asffsa")

        let randomNum = Math.floor(Math.random() * Math.floor(4))
        // let moveTo = arr[0][randomNum].call(tank)
        // console.log(tank, arr[0][randomNum], arr[1][randomNum])
        tank.lastSide = arr[0][randomNum];
        tank.lastSideWh = arr[1][randomNum];
        tank.boliev = false
        return coolisionBlock(tank, tank.lastSide, tank.lastSideWh, tank.tankHtml)
    } else {
        let randomBull = Math.floor(Math.random() * Math.floor(3))
        if (randomBull) {
            coolisionBlock(tank, tank.lastSide, tank.lastSideWh, tank.tankHtml)
        } else {
            let randomNum = Math.floor(Math.random() * Math.floor(4))
            tank.lastSide = arr[0][randomNum];
            tank.lastSideWh = arr[1][randomNum];
            tank.boliev = false
            coolisionBlock(tank, tank.lastSide, tank.lastSideWh, tank.tankHtml)
        }

    }

    randomFaer(tank)

}

function randomFaer(tank){
    if (tank.buliev_faer) {
        tank.buliev_faer = false
        let fier_boll_Tank = tank.faer()
        return faerMove(fier_boll_Tank,tank,[tank_Main])
    }

}