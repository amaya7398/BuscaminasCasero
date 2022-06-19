var lado = 30;

function View( {board, boardHTML, boardStatus} ){
    createBoardHTML(board, boardHTML, boardStatus)
}

function createBoardHTML(board, boardHTML, boardStatus){
    let html = "";
    for (const [i,fila] of board.entries() ){ //i && j are the index of the box, for add on the DOM
        for (let [j, col] of board[i].entries() ) {
            html += (boardStatus[i][j]) //TRUE <=> uncovered, it has been chosen
                ? `<div class="uncovered cc${i}-${j}" style='width:${lado}px;height:${lado}px'> <span class="_${col}"> ${col} </span>`
                : `<div class="covered cc${i}-${j}">`;
            html += `</div>`
        }
    }
    boardHTML.innerHTML = html;
    boardHTML.style.cssText = `grid-template-rows: repeat(${board.length}, 30px); grid-template-columns: repeat(${board[0].length}, 30px);`
    boardHTML.style.width = (board[0].length*lado + 2) +"px";
    boardHTML.style.height = (board.length*lado+2) +"px";
}

export default View
