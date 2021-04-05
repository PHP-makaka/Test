var GAME_TIMER_INTERVAL = 300; // задаёт интервал времени, за который будет выполняться один шаг в игре
var FAER_TIMER_INTERVAL = 150;
var PLAYER_LIFE_COUNT = 3;
var ENEMY_TANKS_COUNT = 21;
var IS_GAME_OVER = false;
const $textCountTanks = document.getElementById("textCountTanks")
/**
 * в этой функции можно выполнить весь тот код, который необходим для старта игры
 * например, именно в этом месте можно нарисовать блоки стен на карте и подписаться на события нажатия кнопок управления
 */
gameInitialization();
/**
 * Жизненный -цикл игры
 * вызывает функцию gameLoop каждые GAME_TIMER_INTERVAL до тех пор, пока игра не закончится
 * (чтобы закончить игру, установите занчение переменной IS_GAME_OVER в true)
 */
gameLoop();

function gameInitialization() {

}

function gameLoop() {
    if (IS_GAME_OVER !== true) {

        /**
         * вот именно в функции gameStep стоит разместить код, который будет выполняться на каждом шаге игрового цикла
         */
        gameStep();


        setTimeout(function () {
            gameLoop()
        }, GAME_TIMER_INTERVAL);
    }
}

function gameStep() {
    ///////задаю рандомное движение танков
    vragTanksRandomMvs(tank_one)
    ////рисую танки в доме
    tanksMoveViev(tank_one)

    vragTanksRandomMvs(tank_two)
    tanksMoveViev(tank_two)

    vragTanksRandomMvs(tank_tree)
    tanksMoveViev(tank_tree)

    ///мой танк движется

    tanksMoveViev(tank_Main)
    tank_Main.PLAYER_LIFE_COUNT =PLAYER_LIFE_COUNT

    if (tank_Main.PLAYER_LIFE_COUNT <1){


    }
    // vragTanksRandomMvs(arrTanksVrag.tank_two,tank_Vrag[1])
    // vragTanksRandomMvs(arrTanksVrag.tank_tree,tank_Vrag[2])
    ///////  прорисовка танков


    // tanksMoveViev(tank_Vrag[1],arrTanksVrag.tank_two)
    // tanksMoveViev(tank_Vrag[2],arrTanksVrag.tank_tree)


    // tank_Vrag[0].style.top = ``

    // tank.arrMove()
    // tank.arrMove()
    // console.log()
    // console.log(tankVrag[0].style.top)
    /**
     * это то самое место, где стоит делать основные шаги игрового цикла
     * например, как нам кажется, можно было бы сделать следующее
     * 1. передвинуть пули
     * 2. рассчитать, где танки окажутся после этого шага
     * 3. проверить столкновения (пуль с танками, пуль со стенами, танков со стенами и танков с танками)
     * 4. убрать с поля мертвые танки и разрушенные стены
     * 5. проверить, не закончились ли жизни у игрока или не закончиличь ли танки противника
     * 6. создать новые танки на базах в случае, если кого-то убили на этом шаге
     */
}


