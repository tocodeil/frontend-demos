
const instructions = document.querySelector('.instructions');
const intro = document.querySelector('.intro');
const container = document.querySelector('.animals');

class Game {
    constructor(container, animals) {
        this.root = container;
        this.animals = animals;
        this.start = this.start.bind(this);
        this.repeatSound = this.repeatSound.bind(this);
        this.root.addEventListener('click', this.check.bind(this));
    }

    check(eventInfo) {
        const imageThatWasClicked = eventInfo.target;
        const winningAnimal = this.animals[this.winner];
        const animalThatWasClicked = imageThatWasClicked.animal;
        if (winningAnimal === animalThatWasClicked) {
            alert('BravO!');
            this.nextRound();
        }
    }

    start() {
        instructions.style.display = 'block';
        intro.style.display = 'none';
        for (let a of this.animals) {
            a.render(this.root);
        }
        this.nextRound();
    }

    nextRound() {
        this.winner = Math.floor(Math.random() * this.animals.length);
        this.repeatSound();
    }

    repeatSound() {
        this.animals[this.winner].play();
    }
}

class Animal {
    constructor(imageSource, audioSource) {
        this.imageSource = imageSource;
        this.audioSource = new Audio(audioSource);
    }

    render(container) {
        const img = document.createElement('img');
        img.src = this.imageSource;
        // Trick: Add properties to DOM element
        img.animal = this;
        container.appendChild(img);
    }

    play() {
        this.audioSource.play();
    }
}

const animals = [
    new Animal("img/camel.jpg", "mp3/camel.mp3"),
    new Animal("img/dog.jpg", "mp3/bark.mp3"),
    new Animal("img/dolphin.jpg", "mp3/dolphin.mp3"),
    new Animal("img/kitten.jpg", "mp3/kitten.mp3"),
];

// Create all the animals
const game = new Game(container, animals);

// Connect start button to game
const startButton = document.querySelector('#start');
startButton.addEventListener('click', game.start);

// Connect repeat button to game
const repeatButton = document.querySelector('#repeat-sound');
repeatButton.addEventListener('click', game.repeatSound);


