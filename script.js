let squares = [];
let square = "";
let player = "";
let player1 = "X";
let player2 = "0";
let player1Positions = [];
let player2Positions = [];
let display = document.getElementById("message");

function markSquare(index) {
    square = document.getElementById(`square${index}`);
    square.textContent = togglePlayers();
    if (player === player1) {
        player1Positions.push(index);
    } else {
        player2Positions.push(index);
    }
    checkWinner();
}

function togglePlayers() {
    player = player === player1 ? player2 : player1;
    return player;
}

function checkWinner() {
    let win0_ = [0,1,2];
    let win1_ = [3,4,5];
    let win2_ = [6,7,8];
    let win_0 = [0,3,6];
    let win_1 = [1,4,7];
    let win_2 = [2,5,8];
    let win00 = [0,4,8];
    let win11 = [2,4,6];
    let winList = [win0_, win1_, win2_, win_0, win_1, win_2, win00, win11];

    for (let i = 0; i < winList.length; ++i) {
        let wonByPlayer1 = winList[i].every(position => player1Positions.includes(position));
        let wonByPlayer2 = winList[i].every(position => player2Positions.includes(position));

        if (wonByPlayer1 || wonByPlayer2) {
            display.textContent = "Player " + player + " won!!";
            stopGame();
            break;
        }
    }
}

function stopGame() {
    square = "";
    player = "";
    player1 = "X";
    player2 = "0";
    player1Positions = [];
    player2Positions = [];
}

function resetGame() {
    stopGame();
    for (let i = 0; i < 9; ++i) {
        document.getElementById(`square${i}`).textContent = "";
    }
    display.textContent = "";
}

document.addEventListener(`DOMContentLoaded`, function() {
    for (let i = 0; i < 9; ++i) {
        squares[i] = document.getElementById(`square${i}`);
        squares[i].addEventListener('click', function(event) {
            markSquare(i);
        });
    }
});        

document.getElementById('reset').addEventListener('click', function() {
    resetGame();
});