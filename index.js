import Game from './Game.js'
import View from './View.js'

const config = { rows: 8, columns: 10, bombs: 10 };
const game = Game(config);


console.log(game.uncoverCell({ row: 3, column: 1} ) );
console.log(game.boardWithNumbers() );
const view = View({board: game.boardWithNumbers() , boardHTML: document.getElementById('board') })


//view.uncoverCell({ content: 0, row: 3, column: 2}) //Está vacío
//view.uncoverCell({ content: 1, row: 2, column: 0}) //Tiene 1
