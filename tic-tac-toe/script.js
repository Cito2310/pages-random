let buttonXO = document.querySelectorAll(".buttonXO");
let turn = 0;
let win = 0;
let player;

const winActive = () => {
    for (let i = 0; i < buttonXO.length; i++) {
        buttonXO[i].value = "on"; 
    };
    win = 1;
    let playerWin;
    if (player === "O") {playerWin = "blue"} else {playerWin = "red"}
    document.querySelector("#winAdvert").innerHTML = `${playerWin} player won!!!`
    if (player === "O") {
        document.querySelector("#winAdvert").style.color = "var(--colorPlayerO)"
    } else {document.querySelector("#winAdvert").style.color = "var(--colorPlayerX)"}
}

const winDetect = () => {
    if (turn === 0) {player = "O";} else {player = "X"}
    const win1 = () => {
        if (
            buttonXO[0].innerHTML === player &&
            buttonXO[1].innerHTML === player &&
            buttonXO[2].innerHTML === player) 
            {
                winActive();
        } else if (
            buttonXO[3].innerHTML === player &&
            buttonXO[4].innerHTML === player &&
            buttonXO[5].innerHTML === player) 
            {
                winActive();
        } else if (
            buttonXO[6].innerHTML === player &&
            buttonXO[7].innerHTML === player &&
            buttonXO[8].innerHTML === player
        ) {
                winActive();
        }
    }
    win1()

    const win2 = () => {
        if (
            buttonXO[0].innerHTML === player &&
            buttonXO[3].innerHTML === player &&
            buttonXO[6].innerHTML === player) 
            {
                winActive();
        } else if (
            buttonXO[1].innerHTML === player &&
            buttonXO[4].innerHTML === player &&
            buttonXO[7].innerHTML === player) 
            {
                winActive();
        } else if (
            buttonXO[2].innerHTML === player &&
            buttonXO[5].innerHTML === player &&
            buttonXO[8].innerHTML === player
        ) {
                winActive();
        }
    }
    win2()

    const win3 = () => {
        if (
            buttonXO[0].innerHTML === player &&
            buttonXO[4].innerHTML === player &&
            buttonXO[8].innerHTML === player) 
            {
                winActive();
        } else if (
            buttonXO[2].innerHTML === player &&
            buttonXO[4].innerHTML === player &&
            buttonXO[6].innerHTML === player) 
            {
                winActive();
        }
    }
    win3()
}

buttonXO.forEach(button =>{
    button.addEventListener("click",()=>{
        if (turn === 0 && button.value === "off") {
            button.innerHTML = "O";
            winDetect();
            turn = 1;
            button.value = "on";
            button.style.color = "var(--colorPlayerO)"
        } else if (turn === 1 && button.value === "off") {
            button.innerHTML = "X";
            winDetect();
            turn = 0;
            button.value = "on";
            button.style.color = "var(--colorPlayerX)"
        }
        console.log(win);
    })
});