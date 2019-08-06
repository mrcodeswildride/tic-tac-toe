var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");

var turn = "X";
var gameOver = false;

for (var i = 0; i < 9; i++) {
    squares[i].addEventListener("click", clickSquare);
}

function clickSquare() {
    if (!gameOver && this.innerHTML == "") {
        this.innerHTML = turn;
        turn = turn == "X" ? "O" : "X";

        if (threeInRow("X")) {
            gameOver = true;
            message.innerHTML = "X wins!";
        }
        else if (threeInRow("O")) {
            gameOver = true;
            message.innerHTML = "O wins!";
        }
        else if (boardIsFull()) {
            gameOver = true;
            message.innerHTML = "Tie game";
        }
    }
}

function threeInRow(letter) {
    if (squares[0].innerHTML == letter && squares[1].innerHTML == letter && squares[2].innerHTML == letter) {
        return true;
    }
    else if (squares[3].innerHTML == letter && squares[4].innerHTML == letter && squares[5].innerHTML == letter) {
        return true;
    }
    else if (squares[6].innerHTML == letter && squares[7].innerHTML == letter && squares[8].innerHTML == letter) {
        return true;
    }
    else if (squares[0].innerHTML == letter && squares[3].innerHTML == letter && squares[6].innerHTML == letter) {
        return true;
    }
    else if (squares[1].innerHTML == letter && squares[4].innerHTML == letter && squares[7].innerHTML == letter) {
        return true;
    }
    else if (squares[2].innerHTML == letter && squares[5].innerHTML == letter && squares[8].innerHTML == letter) {
        return true;
    }
    else if (squares[0].innerHTML == letter && squares[4].innerHTML == letter && squares[8].innerHTML == letter) {
        return true;
    }
    else if (squares[2].innerHTML == letter && squares[4].innerHTML == letter && squares[6].innerHTML == letter) {
        return true;
    }

    return false;
}

function boardIsFull() {
    for (var i = 0; i < squares.length; i++) {
        if (squares[i].innerHTML == "") {
            return false;
        }
    }

    return true;
}
