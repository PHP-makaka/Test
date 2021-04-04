let $blocks = document.getElementsByClassName("game-object game-object__wall")

function blockOrientationNear(orietn,tank) {
    for (let i = 0; i < $blocks.length; i++){
        if (orietn == "right") {
            if (Number($blocks[i].style.left.replace("px", ' ')) == 64 + Number(tank.style.left.replace("px", ' '))
                && $blocks[i].style.top.replace("px", ' ') == Number(tank.style.top.replace("px", ' '))
            ) return true
        } else if (orietn == "left") {
            if (64 + Number($blocks[i].style.left.replace("px", ' ')) == Number(tank.style.left.replace("px", ' '))
                && $blocks[i].style.top.replace("px", ' ') == Number(tank.style.top.replace("px", ' '))
            ) return true
        } else if (orietn == "top") {
            if (Number($blocks[i].style.left.replace("px", ' ')) == Number(tank.style.left.replace("px", ' '))
                && 64 + Number($blocks[i].style.top.replace("px", ' ')) == Number(tank.style.top.replace("px", ' '))
            ) return true
        } else if (orietn == "down"){
            if (Number($blocks[i].style.left.replace("px", ' ')) == Number(tank.style.left.replace("px", ' '))
                && Number($blocks[i].style.top.replace("px", ' ')) == 64+Number(tank.style.top.replace("px", ' '))
            ) return true
        }
    }
    return false
}

function coolisionBlock(tank,move,orietn,vievTankHtml) {

    let byl = blockOrientationNear(orietn,vievTankHtml)
    // console.log(orietn)
    if (byl) {
        // console.log("попал")
        // tank.boliev = true
        // console.log(byl)
        return tank.boliev = true
    } else {
        // console.log(byl,"asfas")
        // console.log(tank)
        return tank[move]()
    }
}