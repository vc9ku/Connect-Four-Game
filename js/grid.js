const $gridCells = document.querySelectorAll(".grid-cell");
const $playGame = document.querySelector(".play-player-vs-cpu");
const $gameParty = document.querySelector(".grid-wrapper-game-menu");
const $choosingMenu = document.querySelector(".menu");

console.log($choosingMenu);


const gridCell = document.querySelector('.grid-cell[data-x="0"][data-y="0"]')
gridCell.classList.add("tomato")

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
  ["", "", "", "", "", "", ""],
];

// Game parameters
let currentPlayer = "r";

console.log($playGame);

$gridCells.forEach(function ($gridCell) {
  $gridCell.addEventListener("click", function () {
    const dataX = $gridCell.getAttribute("data-x");
    const dataY = $gridCell.getAttribute("data-y");

    for (let i = 6; i >= 0; i--) {
      if (gameBoard[i][dataY] === "") {
        console.log("C'est vide");

        gameBoard[i][dataY] = currentPlayer
        
        console.log(gameBoard)
        
        return

        // if (currentPlayer === "r") {
        //   $gridCell.innerHTML = counterRed;
        //   $gridCell.classList.add("taken");
        //   currentPlayer = "y";
        // } else {
        //   $gridCell.innerHTML = counterYellow;
        //   $gridCell.classList.add("taken");
        //   currentPlayer = "r";
        // }
      } else {
        console.log("C'est pas vide");
      }
    }
  });
});

// $gridCells.forEach(function($gridCell) {
//     $gridCell.addEventListener("click", function() {
//         const dataX = $gridCell.getAttribute("data-x")
//         const dataY = $gridCell.getAttribute("data-y")
//         gameBoard[dataX][dataY] = currentPlayer
//         console.log(gameBoard)
//         if ($gridCell.hasChildNodes() === false) {
//         if (currentPlayer === "r") {
//             if ([dataY - 1].hasChildNodes() === true) {
//                 $gridCell.innerHTML = counterRed
//                 currentPlayer = "y"
//             } else {
//                 alert("Espace indisponible")
//             }
//         } else {
//             $gridCell.innerHTML = counterYellow
//             currentPlayer = "r"
//         }
//     }
//     })
// })

// Get Player to the Game

$playGame.addEventListener("click", function (e) {
  $gameParty.classList.remove("hidden");
  $choosingMenu.classList.add("hidden");
});
