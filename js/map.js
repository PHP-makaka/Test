var MAP = [
    [2, 0, 0, 4, 0, 0, 2, 0, 0, 4, 0, 0, 2],
    [0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0],
    [0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 3, 3, 0, 0, 3, 4, 3, 0, 0, 3, 3, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 3, 0, 3, 0, 0, 0, 0, 0]
]
let $mainGameElemetn = document.getElementById("game-map");

let countLeft= 0;
let countTop=0;

var MAP_LEGEND = {
    PLAYER_BASE: 1,
    ENEMY_BASE: 2,
    WALL: 3,
    WALL_STRONG:4
}
let countName =1;
for (let i = 0; i<MAP.length;i++){
    for (let j = 0; j<MAP[i].length;j++){

        let div = document.createElement('div');

        if (MAP[i][j]==MAP_LEGEND.PLAYER_BASE){
            div.className = "game-object game-object__player-tank";
            div.id ="object__player-tank";
            div.style.top =`${countTop}px`
            div.style.left = `${countLeft}px`
            $mainGameElemetn.append(div)
        }else if (MAP[i][j]==MAP_LEGEND.ENEMY_BASE){
            div.className = "game-object game-object__enemy-tank";
            div.id =`enemy_${countName}`;
            countName++
            div.style.top =`${countTop}px`
            div.style.left = `${countLeft}px`
            $mainGameElemetn.append(div)

        }else if (MAP[i][j]==MAP_LEGEND.WALL){
            div.className = "game-object game-object__wall";
            div.style.top =`${countTop}px`
            div.style.left = `${countLeft}px`
            $mainGameElemetn.append(div)
        }else if (MAP[i][j]==MAP_LEGEND.WALL_STRONG){
            div.className = "game-object game-object__wall";
            div.id = "game-object__wall_strong"
            div.style.top =`${countTop}px`
            div.style.left = `${countLeft}px`
            $mainGameElemetn.append(div)
        }

        countLeft+=64

    }
    countLeft= 0
    countTop+=64
}
