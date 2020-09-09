import Game from './Game.js'

const game = Game({ rows: 9, columns: 10, bombs: 10})

game.uncoverCell({ row: 4, column: 6})
game.placeFlag({ row: 0, column: 6})
