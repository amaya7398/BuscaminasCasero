import View from './View.js'

function createMatrix(rows, columns, cellContent){
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++){
            row.push(cellContent);
        }
        matrix.push(row);
    }
    return matrix;
}

const createMinesBoard = (rows, columns, bombs) => {
    const minesBoard = createMatrix(rows, columns, false);
    const coordinates = Array(bombs); //just a matrix with N spaces; N is the # of Bombs

    for (let i = 0; i < bombs; i++){
        const row = Math.floor(Math.random() * rows)
        const column = Math.floor(Math.random() * columns)
        if (!minesBoard[row][column]){
            minesBoard[row][column] = true
            coordinates[i] = [row, column]
        }
    }
    return {minesBoard, coordinates};
}

function createBoardWithNumbers (rows, columns, coordinates){
    const board = createMatrix(rows, columns, 0)
    coordinates.forEach(([row, column]) => {
        board[row][column] = -1;
        //Passing around all boxes (1 near space) with a bomb and add 1 to boxes without bomb
        //adding 1 to all the boxes around a bomb
        for(let i = Math.max(0, row - 1); i <= Math.min(board.length-1, row + 1); i++){
            for(let j = Math.max(0, column - 1); j <= Math.min(board[i].length-1, column + 1); j++) {
                if (board[i][j] !== -1){
                    board[i][j]++
                }
            }
        }
    });

    return board
}

function Game( {rows, columns, bombs} ){
    //minesBoard == a matrix with TRUE where should be a bomb
    //coordinates == array with the coords of the bombs
    const { minesBoard, coordinates} = createMinesBoard(rows, columns, bombs)
    //board == a matrix filled with respective numbers, numbers indicates how many bombs around 1 near space it have
    const board = createBoardWithNumbers(rows, columns, coordinates)
    // statusUncoveredCells == just a matrix filled with false. FALSE means the box hasn't been chosen
    const statusUncoveredCells = createMatrix(rows, columns, false)
    // function that render the table, it is trigger when user do something
    const render = () => { View({   board: board ,
                                    boardHTML: document.getElementById('board'),
                                    boardStatus: statusUncoveredCells}) }

    function uncoveredCellIsCero(row, column) { return board[row][column] === 0}
    function isCovered(row, column) { return !statusUncoveredCells[row][column]}
    //Uncover function, if it's cero, it will uncover all possible boxes
    const uncoverCell = (row, column) => {
        if( uncoveredCellIsCero(row,column) && isCovered(row,column)){
            statusUncoveredCells[row][column] = true;
            uncoverAllAroundIt(row,column);
        }
        statusUncoveredCells[row][column] = true;
    }
    //For cero and if u want to uncover all around the box chosen
    const uncoverAllAroundIt = (row, column ) => {
        // uncoverCell(row,column);
        //Delimitate the area where it will going to work
        for(let i = Math.max(0, row - 1); i <= Math.min(board.length-1, row + 1); i++){
            for(let j = Math.max(0, column - 1); j <= Math.min(board[i].length-1, column + 1); j++) {
                uncoverCell(i,j);
            }
        }
    }

    return {
        uncoverCell: ( {row, column} ) => {
            uncoverCell(row,column);
            render();
            if (minesBoard[row][column]){
                alert("GAME OVER");
            }
            return minesBoard[row][column];
        },
        placeFlag: ({row, column}) => {
            console.log(`Row: ${row}, colum: ${column}`)
            console.log("Se pone la bandera 'segura'");
        },
        getBoardWithNumbers: () => {
            return board;
        },
        getStatusCells: () => {
            return statusUncoveredCells;
        },
        init: () => {
            render();
        }
    }
}

export default Game
