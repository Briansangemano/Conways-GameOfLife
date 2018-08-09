var play = function() {
  var cells = Board.getCells();
  Board.updateCells(cells);
}

var init = function() {
  Screen.Starts();
  Screen.InputFocus();
}

var refrescar = function() {
  location.reload(true);
}

window.onload = init;
