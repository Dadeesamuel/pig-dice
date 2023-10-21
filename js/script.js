
// Constructor function for a Pig Dice game
function PigDiceGame() {
    this.players = ['Player 1', 'Player 2'];
    this.scores = [0, 0];
    this.currentScore = 0;
    this.activePlayer = 0;
}

PigDiceGame.prototype.rollDice = function() {
    let dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 1) {
        this.currentScore = 0;
        this.switchPlayer();
    } else {
        this.currentScore += dice;
    }
    return dice;
};

PigDiceGame.prototype.hold = function() {
    this.scores[this.activePlayer] += this.currentScore;
    this.currentScore = 0;

    if (this.scores[this.activePlayer] >= 100) {
        alert(this.players[this.activePlayer] + ' wins!');
        this.newGame();
    } else {
        this.switchPlayer();
    }
};

PigDiceGame.prototype.switchPlayer = function() {
    this.currentScore = 0;
    this.activePlayer = 1 - this.activePlayer;
    $('#game p').removeClass('active');
    $('#game p:eq(' + this.activePlayer + ')').addClass('active');
    
};

PigDiceGame.prototype.newGame = function() {
    this.scores = [0, 0];
    this.currentScore = 0;
    this.activePlayer = 0;
    $('#player1Score').text('0');
    $('#player2Score').text('0');
    $('#currentScore').text('0');
    $('#game p').removeClass('active');
    $('#game p:eq(0)').addClass('active');
};

let game = new PigDiceGame();


$(document).ready(function(){
   // Event handler for the Roll Dice button
$('#rollButton').click(function() {
    let dice = game.rollDice();
    $('#currentScore').text(dice);
    if (dice === 1) {
        $('#pic1').show();
    } else if (dice === 2) {
        $('#pic2').show();
    } else if (dice === 3) {
        $('#pic3').show();
    } else if (dice === 4) {
        $('#pic4').show();
    } else if (dice === 5) {
        $('#pic5').show();
    } else if (dice === 6) {
        $('#pic6').show();
    }
     else {
        $('.album').hide();
    }

});

// Event handler for the Hold button
$('#holdButton').click(function() {
    game.hold();
    $('#player1Score').text(game.scores[0]);
    $('#player2Score').text(game.scores[1]);
    $('#currentScore').text('0');

    
    $('.pics').hide();
});

// Event handler for the New Game button
$('#newGameButton').click(function() {
    game.newGame();
});
    });