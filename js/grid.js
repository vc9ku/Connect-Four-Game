const $gridCells = document.querySelectorAll(".grid-cell");
const $playGame = document.querySelector(".play-player-vs-cpu");
const $gameParty = document.querySelector(".grid-wrapper-game-menu");
const $choosingMenu = document.querySelector(".menu");
const $cpuScore = document.querySelector(".cpu-counter")
const $playerScore = document.querySelector(".player-counter")


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

let gameBoard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

let currentPlayer = "r";

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

function checkWin() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (gameBoard[i][j] !== "") {
        if (j <= 3 && gameBoard[i][j] === gameBoard[i][j + 1] && gameBoard[i][j] === gameBoard[i][j + 2] && gameBoard[i][j] === gameBoard[i][j + 3]) {
          return gameBoard[i][j];
        }
        if (i <= 2 && gameBoard[i][j] === gameBoard[i + 1][j] && gameBoard[i][j] === gameBoard[i + 2][j] && gameBoard[i][j] === gameBoard[i + 3][j]) {
          return gameBoard[i][j];
        }
        if (i <= 2 && j <= 3 && gameBoard[i][j] === gameBoard[i + 1][j + 1] && gameBoard[i][j] === gameBoard[i + 2][j + 2] && gameBoard[i][j] === gameBoard[i + 3][j + 3]) {
          return gameBoard[i][j];
        }
        if (i >= 3 && j <= 3 && gameBoard[i][j] === gameBoard[i - 1][j + 1] && gameBoard[i][j] === gameBoard[i - 2][j + 2] && gameBoard[i][j] === gameBoard[i - 3][j + 3]) {
          return gameBoard[i][j];
        }
      }
    }
  }
  return null;
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
}

$gridCells.forEach(function ($gridCell) {
  $gridCell.addEventListener("click", function () {
    const dataY = $gridCell.getAttribute("data-y");

    for (let i = 5; i >= 0; i--) {
      if (gameBoard[i][dataY] === "") {
        gameBoard[i][dataY] = currentPlayer;
        updateBoard();

        const winner = checkWin();
        if (winner) {
          updateScores(winner);
          console.log(`Player ${winner === "r" ? "Red" : "Yellow"} wins!`);
          resetGame();
          return;
        }

        currentPlayer = currentPlayer === "r" ? "y" : "r";
        console.log(gameBoard);
        break;
      }
    }
  });
});

$playGame.addEventListener("click", function (e) {
  $gameParty.classList.remove("hidden");
  $choosingMenu.classList.add("hidden");
});
