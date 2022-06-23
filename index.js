import Game from './Game.js'
import View from './View.js'

const config = { rows: 8, columns: 10, bombs: 10 };
const game = Game(config);
game.init();

document.getElementById("board").addEventListener("contextmenu", e => {
    e.preventDefault();
})

document.getElementById("board").addEventListener("mousedown", e => {
    let event = e.button;
    e = e.target;
    if (!isBoardChild(e) && !isBoardChildChild(e)) { return false } //clicked some other thing, useless
    let coords = getCoords(e);
    if (event == 0) { //Primary
        /*  <div.board> <div.uncovered/overed> <span>_#_<\span> <\div> <\div> HTML structure */
        if (isBoardChild(e) && !e.hasChildNodes()) {  //Los uncovered nunca podrán tener un hijo.
            game.uncoverCell({ row: parseInt(coords[0]), column: parseInt(coords[1]) }); //  Por ende si lo escogido no tiene como padre
        }
    } else if (event == 1) { //mid click
        game.placeFlag(({ row: parseInt(coords[0]), column: parseInt(coords[1]) }));
    } else if (event == 2) { //right click
        if (isBoardChild(e) || isBoardChildChild(e)) {
            game.uncoverAllAroundIt(({ row: parseInt(coords[0]), column: parseInt(coords[1]) }));
        }
    }
})

function isBoardChild(e) {
    return e.parentElement.className.split(" ")[0] === "board"
}
function isBoardChildChild(e) {
    return e.parentElement.parentElement.className.split(" ")[0] === "board"
}
function getCoords(e) {
    let coords
    if (isBoardChild(e)) {
        coords = e.className.split(" cc")[1].split("-");
    }
    if (isBoardChildChild(e)) {
        coords = e.parentElement.className.split(" cc")[1].split("-");
    }
    return coords
}