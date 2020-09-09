import Game from './Game.js'
import view from './View.js'

const game = Game({ rows: 9, columns: 10, bombs: 10})
const view = View({ board: document.getElementById('board') })

const config = { rows: 5, columns: 5, bombs: 5, board: document.getElementById('board')}
const game = Game(config)


view.uncoverCell({ content: 0, row: 3, column: 2}) //Está vacío
view.uncoverCell({ content: 1, row: 2, column: 0}) //Tiene 1
