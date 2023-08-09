const memoryGame = () => {
    let card = document.querySelectorAll(".cards");
    let finishNum = 0;

    const assignRandomCards = () => {
        let colors = ["#9b5de5","#c65ccd","#f15bb5","#f8a07b","#fee440","#7fd09d","#00bbf9","#00d8e7","#00f5d4"];
        let colorPars = [0,0,0,0,0,0,0,0,0];


        for (let i = 0; i < card.length; i++) {
            const randomColor = () => {
                let r = (Math.floor(Math.random()*colors.length))
                
                if (colorPars[r] === 2) {
                    randomColor();
                } else {
                    card[i].querySelector(".frontCard").style.backgroundColor = colors[r];
                    card[i].value = r;
                    colorPars[r]++;
                }
            }
            randomColor();
        }
    }
    assignRandomCards();

    const clickCards = () => {
        let numClick = 0;
        let turnCard = "card1";


        card.forEach(button => {
            button.addEventListener("click", ()=>{


// AL HACER CLICK COMPRUEBA SI HAY DOS CARTAS ACTIVAS
                if (numClick === 2) {
                    const parCardDetect = () => {
                        let card1 = document.querySelector("#card1");
                        let card2 = document.querySelector("#card2");
                        const resetCards = () => {
                            for (let i = 0; i < card.length; i++) {
                                card[i].removeAttribute("id");
                                numClick = 0;
                                card[i].dataset.active = "desactive";
                            }
                        }

                        if (card1.value === card2.value) {
                            card1.querySelector(".frontCard").style.backgroundColor = "transparent";
                            card1.querySelector(".backCard").style.backgroundColor = "transparent";

                            card2.querySelector(".frontCard").style.backgroundColor = "transparent";
                            card2.querySelector(".backCard").style.backgroundColor = "transparent";

                            card1.dataset.par = "parFound";
                            card2.dataset.par = "parFound";

                            finishNum++;
                            if (finishNum == ((card.length)/2)) {
                                let winAlert = document.querySelector("#advertWin");
                                let resetAlert = document.querySelector("#advertReset");
                                winAlert.innerHTML = "you've won!!!";
                                resetAlert.innerHTML = "restart the page if you want to play again";
                            }
                        }
                        
                        for (let i = 0; i < card.length; i++) {
                            card[i].removeAttribute("style");
                            card[i].querySelector(".flipCard").removeAttribute("style");
                        }

                        resetCards();
                    }
                    parCardDetect();



// AL HACER CLICK VOLTEA LA CARTA Y ASIGNA LOS PARAMETROS
                } else if (button.dataset.active === "desactive" && button.dataset.par !== "parFound") {
                    const flipCard = () => {
                        button.style.transform = "rotateY(180deg)";
                        button.querySelector(".flipCard").style.transform = "rotateY(180deg)";
                    }
                    flipCard();

                    const assignTurnCard = () => {
                        if (turnCard === "card1"){
                            button.id = turnCard;
                            turnCard = "card2";
                        } else {
                            button.id = turnCard;
                            turnCard = "card1";
                        }
                        button.dataset.active = "active";
                    }
                    assignTurnCard();


                    numClick++;
                    
                }
            })
        })
    }
    clickCards();
}
memoryGame();
