
var play = function () {
  var cells = Board.getCells();
  Board.updateCells(cells);
}

var init = function () {
  Game.init();
  Game.start();
}

window.onload = init;
