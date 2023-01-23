let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 0, 10, 0],
        [3, 4, 5, 0, 19, 0],
        [6, 7, 8, 0, 28, 0],
        [0, 3, 6, -9, 19 , 90],
        [1, 4, 7, 0, 19, 90],
        [2, 5, 8, 9, 19, 90],
        [0, 4, 8, 0, 19, 45],
        [2, 4, 6, 0, 19, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            isgameover = true

            if((e[5])===135||(e[5])===45){
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width = "30vw";
                document.querySelector('.win').innerText = boxtext[e[0]].innerText + " Won"
            }
            else{
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "25vw";
            document.querySelector('.win').innerText = boxtext[e[0]].innerText + " Won"
            }
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext'); 
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            // if (!isgameover&&boxtext.innerText === ''){
            //     document.getElementsByClassName("win")[0].innerText  = "Draw ";
            // } 
        }
    })
})

// Add onclick listener to reset button
RestartBtn.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("win")[0].innerText  = "";
})