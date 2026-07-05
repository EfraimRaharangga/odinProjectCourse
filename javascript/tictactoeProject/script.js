function Game(parent, status, startModal, player1, player2) {
  let column = new Array(9)
  let container = document.querySelector(parent)
  let statusDis = document.querySelector(status)
  let startElement = document.querySelector(startModal)
  let player1Score = document.querySelector('#p1-score')
  let player2Score = document.querySelector('#p2-score')
  const playerO = player(player1, 'O');
  const playerX = player(player2, 'X');
  let giliran = playerO
  let gameState = 'berjalan'
  reset()
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
    function addPoint() {
      point++
    }
    function getPoint() {
      return point
    }
    function resetPoint() {
      point = 0
    }

    return { getName, getSym, addPoint, resetPoint, getPoint }
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
      column[col] = giliran.getSym()
      render(checkWinOrDraw())
    }
  }

  function reset() {
    gameState = 'berjalan'
    giliran = playerO
    makeArrayEmpty()
    render('Mulai Game')
    return column
  }

  function checkWinOrDraw() {
    let getName = giliran.getName()
    const getSym = giliran.getSym()
    checkWinPattern()
    checkDrawPattern()
    if (gameState == 'menang') {
      if (giliran == playerO) {
        playerO.addPoint()
        player1Score.innerHTML = playerO.getPoint()
      } else {
        playerX.addPoint()
        player2Score.innerHTML = playerX.getPoint()
      }

      return `${getName} menang`
    }
    else if (gameState == 'draw') {
      return `game draw`
    }
    else {
      giliran = getSym == 'O' ? playerX : playerO
      getName = giliran.getName()
      return `giliran ${getName} bermain`
    }
  }

  function checkDrawPattern() {
    let draw = column.every(x => (x == 'O' || x == 'X'))
    if (draw) gameState = 'draw'
  }

  function checkWinPattern() {
    let getSymbol = giliran.getSym()
    polaMenang = [[0, 1, 2], [1, 4, 7],
    [3, 4, 5], [2, 5, 8],
    [6, 7, 8], [0, 3, 6],
    [0, 4, 8], [2, 4, 6]]
    polaMenang.forEach((idx) => {
      let cek = idx.every((id) => (column[id] == getSymbol && column[id] !== 'kosong'))
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
