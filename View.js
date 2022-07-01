import { fire_onShowScore } from './firebase.js'
var lado = 30;

export function View({ board, boardHTML, boardStatus, boardFlags }) {
    createBoardHTML(board, boardHTML, boardStatus, boardFlags)
}

function createBoardHTML(board, boardHTML, boardStatus, boardFlags) {
    let html = "";
    for (const [i, fila] of board.entries()) { //i && j are the index of the box, for add on the DOM
        for (let [j, col] of board[i].entries()) {
            if (boardStatus[i][j]) { //TRUE <=> uncovered, it has been chosen
                html += `<div class="uncovered cc${i}-${j}" style='width:${lado}px;height:${lado}px'> <span class="_${col}"> ${col} </span>`
            } else if (boardFlags[i][j]) { //If no TRUE all down should be COVERED, also can have a "flag"
                html += `<div class="covered cc${i}-${j} withFlag">`;
            } else { // no is uncovered neither have flag
                html += `<div class="covered cc${i}-${j}">`;
            }
            html += `</div>`
        }
    }
    boardHTML.innerHTML = html;
    boardHTML.style.cssText = `grid-template-rows: repeat(${board.length}, 30px); grid-template-columns: repeat(${board[0].length}, 30px);`
    boardHTML.style.width = (board[0].length * lado + 2) + "px";
    boardHTML.style.height = (board.length * lado + 2) + "px";
}

export function viewSaveScore(func_saveScore) {
    const name = prompt("Enter your name"); //boardHTML.innerHTML = "" //should generate html scoreboard
    func_saveScore(name, "TBD") //score => auto generate
}

export async function showScoreboard(boardHTML) {
    //callback to firebase onSnapShot();
    fire_onShowScore((querySnapshot) => {
        let html = `
        <table> <tr>
            <th class="scores">Player Name</th>
            <th class="scores">Score</th> </tr>`;

        querySnapshot.forEach(doc => {
            const score = doc.data();
            html += `
            <tr class="scores">
                <td>${score.playerName}</td>
                <td>${score.score}</td>
            </tr>`;
        });
        boardHTML.style.cssText = "";
        boardHTML.innerHTML = html;
    });
}
