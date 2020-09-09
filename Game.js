function createMatrix(rows, columns, elements){
    const matrix = []
    for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < columns; j++){
            row.push(cellContent)
        }
        matrix.push(row)
    }
}

const createMinesBoard = (rows, colums, bombs) => {
    const minesBoard = createMatrix(rows, columns, false)
    const coordinates = Array(bombs)

    for (let i = 0; i < bombs;){
        const rowIndex = Math.floor(Math.random() * rows)
        const columnIndex = Math.floor(Math.random() * columns)
        if (!minesBoard[rowIndex][columnIndex]){
            minesBoard[rowIndex][columnIndex] = true
            coordinates[i] = [rowIndex, columnIndex]
        }
    }
}
function createBoard (){
    const board = createMatrix(rows, columns, 0)
    coordinates.forEach(([row, column]) => {
        board[row][column] = -1
        for(let i = Math.max(0, row - 1); i <= Math.min(board.length, row + 1); i++){
            for(let j = Math.max(0, column - 1); j <= Math.min(board[i].length, column + 1); j++) {
                if (board[i][j] !== -1){
                    board[i][j]++
                }
            }
        }
    });

    return board
}




function Game({rows, columns, bombs}){
    const { minesBoard, coordinates} = createMinesBoard(rows, columns, bombs)

    const board = createBoard(rows, columns, coordinates)
    const uncoveredCells = createMatrix(rows, columns, false)

    return {
        uncoverCell: function({row, colum}){
            if (minesBoard[row][column]){
                alert("GAME OVER");
            }

            uncoveredCells[row][columns] = true
            return minesBoard[row][column]
        },
        placeFlag: function({row, colum}){
            //console.log(`Row: ${row}, colum: ${column}`)
        }
    }
}

export default Game
