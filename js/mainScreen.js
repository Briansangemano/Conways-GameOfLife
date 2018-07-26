var Screen = {
  accept: null,
  number: 0,
  getStart: function() {
    return document.getElementById('Start');
  },
  getNumber: function() {
    return document.getElementById('cellnumber').value;
  },
  hideScreen: function() {
    document.getElementsByClassName('mainScreen')[0].style.display = 'none';
  },
  Starts: function() {
    Screen.accept = Screen.getStart();
    Screen.accept.onclick = Screen.setStructure;
  },
  setStructure: function() {
    Screen.number = Screen.getNumber();
    var onlyNumbers = Validation.onlyNumbers(Screen.number);
    var includedNumber = Validation.includedNumber(5, 25, Screen.number);
    if (onlyNumbers && includedNumber) {
      Screen.hideScreen();
      Board.rows = Screen.number;
      Board.columns = Screen.number;
      Game.init();
      Game.start();
    } else {
      if (document.getElementsByClassName('validation')[0] === undefined) {
        alert('Ingrese un NUMERO entre 5 y 25');
      }
    }
  }
}
Validation = {
  onlyNumbers: function(text) {
    var Number = /^[0-9]+$/;
    if (text.match(Number)) {
      return true;
    } else {
      return false;
    }
  },
  includedNumber: function(A, B, number) {
    if (number >= A && number <= B) {
      return true;
    } else {
      return false;
    }
  }
}
