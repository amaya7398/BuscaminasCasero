var lado = 30;

function View( {board, boardHTML} ){
    // const boardGame = board;
    // console.log(board);
    // console.log(boardGame);
    createBoardHTML(board, boardHTML)

}

function createBoardHTML(board, boardHTML){
    let html = "";
    for (let f = 0; f < board.length-1; f++){
        for (let c = 0; c < board[f].length-1; c++) {
            html += `<div class="covered"> `
            html += ( board[f][c] > 0 )
                ? `<span class="_${board[f][c]}" `
                : `<span `
            html += `style="width:${lado}px;height:${lado}" >`
            html += `${board[f][c]}</span>`
            html += `</div>`
        }
    }
    boardHTML.innerHTML = html;
    boardHTML.style.width = board[0].length*lado +"px";
    boardHTML.style.height = board.length*lado +"px";
}

export default View
