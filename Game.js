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
    const coordinates = Array(bombs); //just a matrix with N spaces; N <=>Bombs

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
    const { minesBoard, coordinates} = createMinesBoard(rows, columns, bombs)
    const board = createBoardWithNumbers(rows, columns, coordinates)
    const uncoveredCells = createMatrix(rows, columns, false)

    return {
        uncoverCell: ( {row, column} ) => {
            if (minesBoard[row][column]){
                alert("GAME OVER");
            }
            uncoveredCells[row][columns] = true
            return minesBoard[row][column]
        },
        placeFlag: ({row, column}) => {
            console.log(`Row: ${row}, colum: ${column}`)
            console.log("Se pone la bandera 'segura'");
        },
        boardWithNumbers: () => {
            return board;
        }
    }
}

export default Game
