let orientation_faer = {
    "180": "moveDown",
    "0": "moveTop",
    "90": "moveRight",
    "-90": "moveleft"
}


class FaersObj {
    constructor(top, left, orient, faer_ID) {
        this.top = top,
            this.left = left,
            this.orient = orient,
            this.faer_ID = faer_ID,
            this.maxTop = $mainGameElemetn.offsetHeight - 64;
        this.maxLeft = $mainGameElemetn.offsetWidth;
        this.faerHtml = document.getElementById(this.faer_ID)
        this.isAlive = true
    }

    moveTop() {
        // console.log(this.top, "здесь")
        this.top -= 64
        if (this.top < -64) {
            this.isAlive = false
        } else {
            console.log(this.top, "asffas")
        }

        this.checkIsalived()
    }

    moveDown() {
        this.top += 64
        if (this.top > this.maxTop + 64) {
            this.isAlive = false
        }
        this.checkIsalived()
        console.log("right", this.left)


    }

    moveRight() {
        this.left += 64
        if (this.left > this.maxLeft) {
            this.isAlive = false
        }
        this.checkIsalived()
        console.log("right", this.left)
    }

    moveleft() {
        this.left -= 64
        if (this.left < -64) {
            this.isAlive = false
        }
        this.checkIsalived()
        console.log("right", this.left)
    }


    checkIsalived() {
        if (!this.isAlive) {
            this.faerHtml.remove()
        }
        this.checkCoolisionBlock()

    }

    checkCoolisionBlock() {
        let block = $blocks;

        for (let i = 0; i < block.length; i++) {
            if ((Number(block[i].style.left.replace("px", ' ')) <= this.left
                && Number(block[i].style.top.replace("px", ' ')) + 64 > this.top) && (
                Number(block[i].style.left.replace("px", ' ')) + 64 > this.left
                && Number(block[i].style.top.replace("px", ' ')) <= this.top)) {

                this.faerHtml.style.top = `${Number(block[i].style.top.replace("px", ' ')) + 32}px`;
                this.faerHtml.style.left = `${Number(block[i].style.left.replace("px", ' ')) + 32}px`;

                // for (let key in orientation_faer){
                //     if (key = this.orient){
                //         console.log(orientation_faer[key],"asfsaf")
                //         this[orientation_faer[key]]
                //     }
                // }
                //
                block[i].remove()
                this.isAlive = false
                setTimeout(() => {
                    this.faerHtml.remove()
                }, 10)
            }
        }

    }

    checkTank(arrTANKS) {
        // console.log(arrTANKS[0].tankHtml,"Asfasf")
        // let tankV = arrTANKS[0].tankHtml

        console.log(arrTANKS[0].PLAYER_LIFE_COUNT)
        for (let i = 0; i < arrTANKS.length; i++) {
            if ((Number(arrTANKS[i].tankHtml.style.left.replace("px", ' ')) <= this.left
                && Number(arrTANKS[i].tankHtml.style.top.replace("px", ' ')) + 64 > this.top) && (
                Number(arrTANKS[i].tankHtml.style.left.replace("px", ' ')) + 64 > this.left
                && Number(arrTANKS[i].tankHtml.style.top.replace("px", ' ')) <= this.top)) {


                console.log("попал")
                arrTANKS[i].top = arrTANKS[i].default_TOP
                arrTANKS[i].left = arrTANKS[i].default_LEFT
                this.isAlive = false
                this.faerHtml.remove()
                if (arrTANKS[i].tankHtml_ID == "object__player-tank") {
                    if (PLAYER_LIFE_COUNT < 1) {
                        alert("ПРОИГРАЛ!")
                        location.reload()
                    } else {

                        PLAYER_LIFE_COUNT--
                        alert("Осталось: "+PLAYER_LIFE_COUNT+" жизни!")
                    }

                }
                if (arrTANKS[i].tankHtml_ID == "enemy_1" || arrTANKS[i].tankHtml_ID == "enemy_2" || arrTANKS[0].tankHtml_ID == "enemy_3") {
                    ENEMY_TANKS_COUNT--
                    if (ENEMY_TANKS_COUNT < 1) {
                        alert("Побeдa!")
                        location.reload()
                    } else {
                        $textCountTanks.innerHTML = `осталось убить: ${ENEMY_TANKS_COUNT} танков`
                        alert("осталось убить: "+ENEMY_TANKS_COUNT+" танков")
                    }
                }

            }
            // this.faerHtml.style.top = `${Number(block[i].style.top.replace("px", ' ')) + 32}px`;
            // this.faerHtml.style.left = `${Number(block[i].style.left.replace("px", ' ')) + 32}px`;

            // for (let key in orientation_faer){
            //     if (key = this.orient){
            //         console.log(orientation_faer[key],"asfsaf")
            //         this[orientation_faer[key]]
            //     }
            // }
            //
            // block[i].remove()
            // this.isAlive = false
            // setTimeout(() => {
            //     this.faerHtml.remove()
            // }, 10)
        }

    }

}


function faerMove(fier_boll_Tank, tank, arrVRAGtanks) {
    // console.log(fier_boll_Tank, "safsaf")
    // console.log(fier_boll_Tank.faerHtml)
    // console.log(tank.buliev_faer, "1!!!!!!!!!!!!!")
    for (key in orientation_faer) {
        if (key == fier_boll_Tank.orient) {
            // console.log(orientation_faer[key])
            faerMove_To(fier_boll_Tank, orientation_faer[key], tank, arrVRAGtanks)
            // let faerMain = document.getElementById("faerboll")
            //
            // return faerBollTank.moveTop()

        }
    }
}

// console.log(fier_boll_Tank)


function faerMove_To(fier_boll_Tank, orientation_faer, tank, arrVRAGtanks) {
    // console.log(fier_boll_Tank[orientation_faer])

    fier_boll_Tank[orientation_faer]()
    if (fier_boll_Tank.isAlive) {

        setTimeout(function () {
            // let $faerMain = document.getElementById("faerboll")
            fier_boll_Tank.checkTank(arrVRAGtanks)

            // console.log($faerMain,"f")
            fier_boll_Tank.faerHtml.style.left = `${fier_boll_Tank.left + 32}px`
            fier_boll_Tank.faerHtml.style.top = `${fier_boll_Tank.top + 32}px`
            faerMove_To(fier_boll_Tank, orientation_faer, tank, arrVRAGtanks)
        }, FAER_TIMER_INTERVAL)
    } else {
        // console.log(tank)
        tank.buliev_faer = true
    }
}