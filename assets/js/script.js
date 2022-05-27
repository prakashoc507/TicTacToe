console.log("Welcome to TicTacToe")


//function to change turn
let turn = "X"
let gameOver = false;
const changeTurn = () => {
    return turn === "X" ? "0" : "x"
}