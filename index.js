import Game from './Game.js'
import View from './View.js'

const config = { rows: 8, columns: 10, bombs: 10 };
const game = Game(config);


// console.log(game.uncoverCell({ row: 3, column: 1} ) );
// console.log(game.boardWithNumbers() );

console.log( game.uncoverCell( {row: 1, column: 1} ));
console.log( game.uncoverCell( {row: 2, column: 2} ));
console.log( game.uncoverCell( {row: 3, column: 3} ));
console.log( game.uncoverCell( {row: 4, column: 4} ));
const view = View({ board: game.getBoardWithNumbers() ,
                    boardHTML: document.getElementById('board'),
                    boardStatus: game.getStatusCells()})
    
// console.log( game.uncoverCell( {row: 3, column: 1} ));
// console.log( game.uncoverCell( {row: 3, column: 2} ));
// console.log( game.uncoverCell( {row: 3, column: 3} ));
// console.log( game.uncoverCell( {row: 3, column: 4} ));
