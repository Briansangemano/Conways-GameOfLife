var Game = {
  next: null,
  play: null,
  board: null,
  cells: null,
  interval: null,

  showGame: function() {
    document.getElementsByClassName('game')[0].style.display = 'flex';
  },
  init: function() {
    Game.showGame();
    Board.createCells();
    Board.dynamicBoard();
    Game.board = Board.getBoard();
    Game.cells = Board.getCells();
    Game.next = document.getElementById('next');
    Game.play = document.getElementById('play');
  },
  start: function() {
    for (var i = 0; i < Game.cells.length; i++) {
      Game.cells[i].onclick = Cell.toggle;
    }
    Game.next.onclick = Board.nextStep;
    Game.play.onclick = Game.update;
  },
  update: function() {
    if (Game.play.innerHTML === 'PLAY') {
    Game.interval = setInterval(Board.nextStep, 1000);
    Game.play.innerHTML = 'STOP';
    Game.next.disabled = true;
  } else {
    clearInterval(Game.interval);
    Game.play.innerHTML = 'PLAY';
    Game.next.disabled = false;
  }
  },

};
