/**
 * To use a prototype you need:
 * 
 * 1. Call the constructor function with a "new" -> new Game()
 * 2. Inside the function, use "this" to refer to your new object
 * 3. Create a .prototype field on the function
 * Game.prototype = {}
 */

/*
function Game() {
    this.secret = 0;
    this.numberOfTries = 10;
}

Game.prototype.startNewGame = function() {
    this.secret= Math.floor(Math.random() * 10);
    this.numberOfTries = 0;
}


Game.prototype.play = function(guess) {
    if (this.numberOfTries >= 10) {
        // Sorry, game over
        return;
    }
    this.numberOfTries += 1;
    if (guess > this.secret) {
        return 1;
    } else if (guess < this.secret) {
        return -1;
    } else {
        return 0;
    }
};
*/

class Game {
    constructor() {
        this.secret = 0;
        this.numberOfTries = 10;        
    }

    startNewGame() {
        this.secret= Math.floor(Math.random() * 10);
        this.numberOfTries = 0;        
    }

    play(guess) {
        if (this.numberOfTries >= 10) {
            // Sorry, game over
            return;
        }
        this.numberOfTries += 1;
        if (guess > this.secret) {
            return 1;
        } else if (guess < this.secret) {
            return -1;
        } else {
            return 0;
        }        
    }
}