const X_ICON = 'X';
const CIRCLE_ICON = 'O';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


let cellNodes = document.querySelectorAll('div.row > div');
let statusMessage = document.querySelector('h2');
let resetButton = document.querySelector('button')
resetButton.addEventListener('click', reset)
let isCircleTurn;

console.log(cellNodes);

for (let i = 0; i < cellNodes.length; i++) {
    cellNodes[i].addEventListener('click', cellClicked, { once: true });
}

function cellClicked(e) {
    const cell = e.target;
    const currentClass = isCircleTurn ? CIRCLE_ICON : X_ICON;
    placeMark(cell, currentClass);

    let winner = checkWin();
    if (winner) {
        declareWinner(winner);
    } else {
        checkDraw();
        isCircleTurn = !isCircleTurn;
    }

}


function placeMark(cell, currentClass) {
    cell.textContent = currentClass;
}

function checkWin() {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        let cell1Value = cellNodes[WINNING_COMBINATIONS[i][0]].textContent;
        let cell2Value = cellNodes[WINNING_COMBINATIONS[i][1]].textContent;
        let cell3Value = cellNodes[WINNING_COMBINATIONS[i][2]].textContent;
        if (cell1Value === cell2Value && cell1Value === cell3Value && cell1Value != '') {
            return cell1Value;
        }
    }
}

function declareWinner(winner) {
    statusMessage.textContent = (winner + ' is the winner!');
}

function checkDraw() {
    for (i = 0; i < cellNodes.length; i++) {
        if (cellNodes[i].textContent == "") {
            return
        }
    }
    statusMessage.textContent = "It's a draw!";
}

function reset() {
    for (i = 0; i < cellNodes.length; i++) {
        cellNodes[i].innerHTML = "";
        cellNodes[i].addEventListener('click', cellClicked, { once: true });
    }
    statusMessage.textContent = '';
}




// HINTS!
//if else statements are your friend!
cellNodes[2].textContent


