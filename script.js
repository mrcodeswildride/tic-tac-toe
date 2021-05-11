let squares = document.getElementsByClassName(`square`)
let messageParagraph = document.getElementById(`messageParagraph`)

let turn = `X`
let gameOver = false

for (let square of squares) {
  square.addEventListener(`click`, clickSquare)
}

function clickSquare() {
  if (this.innerHTML == `` && !gameOver) {
    this.innerHTML = turn

    if (threeInRow()) {
      messageParagraph.innerHTML = `${turn} wins!`
      gameOver = true
    } else if (boardIsFull()) {
      messageParagraph.innerHTML = `Tie game`
      gameOver = true
    } else {
      turn = turn == `X` ? `O` : `X`
    }
  }
}

function threeInRow() {
  if (
    squares[0].innerHTML == turn &&
    squares[1].innerHTML == turn &&
    squares[2].innerHTML == turn
  ) {
    return true
  } else if (
    squares[3].innerHTML == turn &&
    squares[4].innerHTML == turn &&
    squares[5].innerHTML == turn
  ) {
    return true
  } else if (
    squares[6].innerHTML == turn &&
    squares[7].innerHTML == turn &&
    squares[8].innerHTML == turn
  ) {
    return true
  } else if (
    squares[0].innerHTML == turn &&
    squares[3].innerHTML == turn &&
    squares[6].innerHTML == turn
  ) {
    return true
  } else if (
    squares[1].innerHTML == turn &&
    squares[4].innerHTML == turn &&
    squares[7].innerHTML == turn
  ) {
    return true
  } else if (
    squares[2].innerHTML == turn &&
    squares[5].innerHTML == turn &&
    squares[8].innerHTML == turn
  ) {
    return true
  } else if (
    squares[0].innerHTML == turn &&
    squares[4].innerHTML == turn &&
    squares[8].innerHTML == turn
  ) {
    return true
  } else if (
    squares[2].innerHTML == turn &&
    squares[4].innerHTML == turn &&
    squares[6].innerHTML == turn
  ) {
    return true
  }

  return false
}

function boardIsFull() {
  for (let square of squares) {
    if (square.innerHTML == ``) {
      return false
    }
  }

  return true
}
