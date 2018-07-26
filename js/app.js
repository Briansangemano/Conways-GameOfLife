var play = function() {
  var cells = Board.getCells();
  Board.updateCells(cells);
}

var init = function() {
  Screen.Starts();
  Screen.InputFocus();
}

window.onload = init;
