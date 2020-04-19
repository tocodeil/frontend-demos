const game = {
    secret: 0,
    numberOfTries: 10,

    startNewGame() {
        this.secret= Math.floor(Math.random() * 10);
        this.numberOfTries = 0;
    },

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
