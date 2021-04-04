function tanksMoveViev(tankThis){
   // console.log(tank1.tankHtml)
    tankThis.tankHtml.style.top = `${tankThis.top}px`;
    tankThis.tankHtml.style.left = `${tankThis.left}px`;
    tankThis.tankHtml.style.transform = `rotate(${tankThis.orientation}deg)`
    // tank.style.left = `${classTank.left}px`;
    // tank.style.transform = `rotate(${classTank.orientation}deg)`
}