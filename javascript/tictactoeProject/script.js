function Game(parent, status, startModal, player1, player2) {
  let column = new Array(9)
  let container = document.querySelector(parent)
  let statusDis = document.querySelector(status)
  let startElement = document.querySelector(startModal)
  let player1Score = document.querySelector('#p1-score')
  let player1DispSym = document.querySelector('#p1-dis-sym')
  let player2DispSym = document.querySelector('#p2-dis-sym')
  let player2Score = document.querySelector('#p2-score')
  const playerOne = player(player1, 'O');
  const playerTwo = player(player2, 'X');
  let giliran = 'O'
  let gameState = 'berjalan'
  reset(true)
  startElement.classList.toggle('hidden')

  function makeArrayEmpty() {
    for (let i = 0; i < 9; i++) {
      column[i] = 'kosong'
    }
  }

  function player(name, sym) {
    let namePlayer = name
    let point = 0
    let symbolPlayer = sym
    function getName() {
      return namePlayer
    }
    function getSym() {
      return symbolPlayer
    }
    function toggleSym() {
      symbolPlayer = symbolPlayer == 'X' ? 'O' : 'X'
    }
    function addPoint() {
      point++
    }
    function getPoint() {
      return point
    }
    function resetPoint() {
      point = 0
    }

    return { getName, getSym, addPoint, resetPoint, getPoint, toggleSym }
  }

  function render(status) {
    let childElement = container.children
    Array.from(childElement).forEach((x, index) => {
      x.textContent = column[index] == 'kosong' ? "" : column[index]
    })
    statusDis.textContent = status
  }

  function playerTurn(col) {
    if (gameState !== 'berjalan') {
      return reset()
    }
    if (column[col] == 'kosong') {
      column[col] = giliran
      render(checkWinOrDraw())
    }
  }

  function reset(state) {
    gameState = 'berjalan'
    if (!state) {
      giliran = 'O';
      playerOne.toggleSym()
      playerTwo.toggleSym()
    }
    makeArrayEmpty()
    player1DispSym.innerText = `(${playerOne.getSym()}):`
    player2DispSym.innerText = `(${playerTwo.getSym()}):`
    render('Mulai Game')
    return column
  }

  function checkWinOrDraw() {
    let getName
    checkWinPattern()
    checkDrawPattern()
    if (gameState == 'menang') {
      if (giliran == playerOne.getSym()) {
        playerOne.addPoint()
        getName = playerOne.getName()
        player1Score.innerHTML = playerOne.getPoint()
      } else {
        getName = playerTwo.getName()
        playerTwo.addPoint()
        player2Score.innerHTML = playerTwo.getPoint()
      }

      return `${getName} menang`
    }
    else if (gameState == 'draw') {
      return `game draw`
    }
    else {
      giliran = giliran == 'O' ? 'X' : 'O'
      getName = giliran == playerOne.getSym() ? playerOne.getName() : playerTwo.getName()
      return `giliran ${getName} bermain`
    }
  }

  function checkDrawPattern() {
    let draw = column.every(x => (x == 'O' || x == 'X'))
    if (draw) gameState = 'draw'
  }

  function checkWinPattern() {
    polaMenang = [[0, 1, 2], [1, 4, 7],
    [3, 4, 5], [2, 5, 8],
    [6, 7, 8], [0, 3, 6],
    [0, 4, 8], [2, 4, 6]]
    polaMenang.forEach((idx) => {
      let cek = idx.every((id) => (column[id] == giliran && column[id] !== 'kosong'))
      if (cek) gameState = 'menang'
    })
  }
  return { playerTurn, reset }
}

let mulai
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let player1 = document.querySelector('#player1').value
  let player2 = document.querySelector('#player2').value
  let displayPlayer1 = document.querySelector('#p1-name-display')
  let displayPlayer2 = document.querySelector('#p2-name-display')
  displayPlayer1.innerText = player1
  displayPlayer2.innerText = player2

  mulai = Game('.board', '#status-display', '#start-modal', player1, player2)
});

function mainCuy(e) {
  mulai.playerTurn(e.currentTarget.dataset.index)
}

function resetGame() {
  mulai.reset()
}
