const $gridCells = document.querySelectorAll(".grid-cell");
const $playGame = document.querySelector(".play-player-vs-cpu");
const $gameParty = document.querySelector(".grid-wrapper-game-menu");
const $choosingMenu = document.querySelector(".menu");
const $cpuScore = document.querySelector(".cpu-counter")
const $playerScore = document.querySelector(".player-counter")
const $backToMenuButton = document.querySelector(".game-menu-button")
const $pauseMenu = document.querySelector(".pause-menu")
const $pauseMenuContinueGame = document.querySelector(".pause-menu-continue-game")
const $restartGame = document.querySelector(".restart-button")
const $pauseMenuRestartGame = document.querySelector(".pause-menu-restart-game")
const $pauseMenuQuitGame = document.querySelector(".pause-menu-quit-game")
const $winMenu = document.querySelector(".player-win-container")
const $playAgainWinMenu = document.querySelector(".play-again-win-menu")
const $winnerPlayerName = document.querySelector(".winner-player-name")
const $playersTurnsBlock = document.querySelector(".players-turns")
const $playerTurnsTitle = document.querySelector(".players-turns-title")
const $timer = document.querySelector(".timer")

const counterYellow = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="70px" height="75px" viewBox="0 0 70 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>counter-yellow-large</title>
    <defs>
        <circle id="path-1" cx="35" cy="35" r="32"></circle>
        <filter x="-3.9%" y="-3.9%" width="107.8%" height="107.8%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="counter-yellow-large">
            <circle id="Oval-Copy-35" fill="#000000" cx="35" cy="35" r="35"></circle>
            <circle id="Oval-Copy-36" fill="#000000" cx="35" cy="40" r="35"></circle>
            <g id="Oval-Copy-35">
                <use fill="#FFCE67" fill-rule="evenodd" xlink:href="#path-1"></use>
                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
            </g>
        </g>
    </g>
</svg>`;

const counterRed = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="70px" height="75px" viewBox="0 0 70 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>counter-red-large</title>
    <defs>
        <circle id="path-1" cx="35" cy="35" r="32"></circle>
        <filter x="-3.9%" y="-3.9%" width="107.8%" height="107.8%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="counter-red-large">
            <circle id="Oval-Copy-41" fill="#000000" cx="35" cy="35" r="35"></circle>
            <circle id="Oval-Copy-42" fill="#000000" cx="35" cy="40" r="35"></circle>
            <g id="Oval-Copy-43">
                <use fill="#FD6687" fill-rule="evenodd" xlink:href="#path-1"></use>
                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
            </g>
        </g>
    </g>
</svg>`;

const redMarker = `<svg width="38" height="36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter x="-17.2%" y="-16.4%" width="134.4%" height="156.8%" filterUnits="objectBoundingBox" id="a"><feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/><feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/><feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowOffsetOuter1"/></filter><path d="m882.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 912 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z" id="b"/></defs><g transform="matrix(1 0 0 -1 -877 156)" fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><path stroke="#000" stroke-width="3" d="M895.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 907 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 878.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z" fill="#FD6687"/></g></svg>`
const yellowMarker = `<svg width="38" height="36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter x="-17.2%" y="-16.4%" width="134.4%" height="156.8%" filterUnits="objectBoundingBox" id="a"><feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/><feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/><feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowOffsetOuter1"/></filter><path d="m794.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 824 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z" id="b"/></defs><g transform="matrix(1 0 0 -1 -789 156)" fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><path stroke="#000" stroke-width="3" d="M807.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 819 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 790.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z" fill="#FFCE67"/></g></svg>`

let gameBoard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

let currentPlayer = "r";

let timeLeft = 15;
let timerInterval;

function updateTimer() {
  if (timeLeft === 0) {
    switchPlayer();
    return;
  }
  
  timeLeft--;
  $timer.textContent = timeLeft;
}

function startNewTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  timeLeft = 15;
  $timer.textContent = timeLeft;
  timerInterval = setInterval(updateTimer, 1000);
}

function resumeTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  $timer.textContent = timeLeft;
  timerInterval = setInterval(updateTimer, 1000);
}

function switchPlayer() {
  currentPlayer = currentPlayer === "r" ? "y" : "r";
  updateTurnIndicator();
  startNewTimer();
}

function updateBoard() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      const cell = document.querySelector(`.grid-cell[data-x="${i}"][data-y="${j}"]`);
      if (gameBoard[i][j] === "r") {
        cell.innerHTML = counterRed;
      } else if (gameBoard[i][j] === "y") {
        cell.innerHTML = counterYellow;
      } else {
        cell.innerHTML = "";
      }
    }
  }
}

let playerScore = 0;
let cpuScore = 0;

function checkWin(board) {
  const rows = 6;
  const cols = 7;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      if (
        board[r][c] !== "" &&
        board[r][c] === board[r][c + 1] &&
        board[r][c] === board[r][c + 2] &&
        board[r][c] === board[r][c + 3]
      ) {
        return true;
      }
    }
  }

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r <= rows - 4; r++) {
      if (
        board[r][c] !== "" &&
        board[r][c] === board[r + 1][c] &&
        board[r][c] === board[r + 2][c] &&
        board[r][c] === board[r + 3][c]
      ) {
        return true;
      }
    }
  }

  for (let r = 0; r <= rows - 4; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      if (
        board[r][c] !== "" &&
        board[r][c] === board[r + 1][c + 1] &&
        board[r][c] === board[r + 2][c + 2] &&
        board[r][c] === board[r + 3][c + 3]
      ) {
        return true;
      }
    }
  }

  for (let r = 0; r <= rows - 4; r++) {
    for (let c = 3; c < cols; c++) {
      if (
        board[r][c] !== "" &&
        board[r][c] === board[r + 1][c - 1] &&
        board[r][c] === board[r + 2][c - 2] &&
        board[r][c] === board[r + 3][c - 3]
      ) {
        return true;
      }
    }
  }

  return false;
}

function updateScores(winner) {
  if (winner === "r") {
    playerScore++;
    $playerScore.innerHTML = playerScore
  } else if (winner === "y") {
    cpuScore++;
    $cpuScore.innerHTML = cpuScore
  }
}

function resetGame() {
  gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];
  currentPlayer = "r";
  updateBoard();
  startNewTimer();
}

function updateTurnIndicator() {
  $playersTurnsBlock.style.backgroundColor = currentPlayer === "r" ? "#FD6687" : "#FFCE67";
  $playerTurnsTitle.innerHTML = `Player ${currentPlayer === "r" ? "Red" : "Yellow"} turn`;
  $playersTurnsBlock.style.color = currentPlayer === "y" ? "#000" : "#fff";
  startNewTimer();
}

$gridCells.forEach(function ($gridCell) {
  $gridCell.addEventListener("click", function () {
    const dataY = $gridCell.getAttribute("data-y");

    for (let i = 5; i >= 0; i--) {
      if (gameBoard[i][dataY] === "") {
        gameBoard[i][dataY] = currentPlayer;
        updateBoard();

        if (checkWin(gameBoard)) {
          clearInterval(timerInterval);
          updateScores(currentPlayer);
          $winnerPlayerName.innerHTML = currentPlayer === "r" ? "Red" : "Yellow";
          $winMenu.classList.remove("hidden");
          $playersTurnsBlock.classList.add("hidden");
          return;
        }
        
        switchPlayer();
        return;
      }
    }
  });
});

updateTurnIndicator();

$playAgainWinMenu.addEventListener("click", function () {
  $winMenu.classList.add("hidden")
  resetGame()
  $playersTurnsBlock.classList.remove("hidden")
  return;
})

$backToMenuButton.addEventListener("click", function () {
  $pauseMenu.classList.remove("hidden")
  clearInterval(timerInterval);
})

$pauseMenuContinueGame.addEventListener("click", function () {
  $pauseMenu.classList.add("hidden")
  resumeTimer();
})

$restartGame.addEventListener("click", function () {
  gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];
  startNewTimer();
  updateBoard();

  $playerScore.innerHTML = 0
  $cpuScore.innerHTML = 0
  alert("Gmame restarted!")
})

$pauseMenuRestartGame.addEventListener("click", function (e) {
  gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];
  startNewTimer();
  updateBoard();

  $playerScore.innerHTML = 0
  $cpuScore.innerHTML = 0
  alert("Game restarted!")
  $pauseMenu.classList.add("hidden")
})

$pauseMenuQuitGame.addEventListener("click", function (e) {
  $gameParty.classList.add("hidden")
  gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];
  updateBoard();
  $pauseMenu.classList.add("hidden")
  $choosingMenu.classList.remove("hidden")
  $playersTurnsBlock.classList.add("hidden")
  $playerScore.innerHTML = 0
  $cpuScore.innerHTML = 0
  clearInterval(timerInterval);
  timeLeft = 15;
  $timer.textContent = timeLeft;
})

$playGame.addEventListener("click", function (e) {
  $gameParty.classList.remove("hidden");
  $choosingMenu.classList.add("hidden");
  $playersTurnsBlock.classList.remove("hidden")
  startNewTimer();
});