import Game from './Game.js'
import View from './View.js'

const config = { rows: 8, columns: 10, bombs: 10 };
const game = Game(config);
game.init();


document.getElementById("board").addEventListener("click", e => {
    /*  <div.board> <div.uncovered/overed> <span>_#_<\span> <\div> <\div> HTML structure */
    e = e.target
    if (e.parentElement.className.split(" ")[0] === "board" && !e.hasChildNodes()){  //Los uncovered nunca podrán tener un hijo.
        let coords = e.className.split(" cc")[1].split("-"); //  Por ende si lo escogido no tiene como padre
        game.uncoverCell({ row:coords[0] , column:coords[1] });
    }})

// console.log( game.uncoverCell( {row: 1, column: 1} ));
// console.log( game.uncoverCell( {row: 2, column: 2} ));
// console.log( game.uncoverCell( {row: 3, column: 3} ));
// console.log( game.uncoverCell( {row: 4, column: 4} ));
// console.log( game.uncoverCell( {row: 5, column: 5} ));
    
// console.log( game.uncoverCell( {row: 3, column: 1} ));
// console.log( game.uncoverCell( {row: 3, column: 2} ));
// console.log( game.uncoverCell( {row: 3, column: 3} ));
// console.log( game.uncoverCell( {row: 3, column: 4} ));
