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
            document.getElementsByClassName("turn1")[0].innerText = "Turn for" + turn

        }
    })
})


// function for checkWin
const checkWin = () => {

}