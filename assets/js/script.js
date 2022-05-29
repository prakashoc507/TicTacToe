console.log("Welcome to TicTacToe")


//function to change turn
let turn = "X"
let gameOver = false;
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Main game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let text = element.querySelector('.text');
    element.addEventListener('click', () => {
        if (text.innerText === '') {
            text.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("turn1")[0].innerText = "Turn for" + turn
            }
        }
    })
})


// function for checkWin
const checkWin = () => {
    let text = document.getElementsByClassName("text")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6, ]

    ]
    wins.forEach(e => {
        if ((text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText) && (text[e[0]].innerText !== "")) {
            document.querySelector(".turn1").innerText = text[e[0]].innerText + "won"
            gameOver = true
        }
    })
}