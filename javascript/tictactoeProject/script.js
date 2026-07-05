function Game(parent, status) {
  let column = new Array(9)
  let container = document.querySelector(parent)
  let statusDis = document.querySelector(status)
  let giliran = 'O'
  let gameState = 'berjalan'
  reset()

  function makeArrayEmpty() {
    for (let i = 0; i < 9; i++) {
      column[i] = 'kosong'
    }
  }

  function updateTable() {
    return column
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

  function reset() {
    gameState = 'berjalan'
    giliran = 'O'
    makeArrayEmpty()
    render('Mulai Game')
    return column
  }

  function checkWinOrDraw() {
    checkWinPattern()
    checkDrawPattern()
    if (gameState == 'menang') {
      return `${giliran} menang`
    }
    else if (gameState == 'draw') {
      return `game draw`
    }
    else {
      giliran = giliran == 'O' ? 'X' : 'O'
      return `giliran ${giliran}`
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

let mulai = Game('.board', '#status-display')

function mainCuy(e) {
  mulai.playerTurn(e.currentTarget.dataset.index)
}

function resetGame() {
  mulai.reset()
}