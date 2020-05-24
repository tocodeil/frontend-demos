class Game {
    constructor(root, animals) {
        this.root = root;
        this.animals = animals;
        this.start = this.start.bind(this);
        this.repeatSound = this.repeatSound.bind(this);        
    }

    checkClick(ev) {
        const animalImageThatWasClicked = ev.target;
        // I don't care when clicking outside images
        if (animalImageThatWasClicked.nodeName !== 'IMG') { return; }

        const animalThatWasClicked = animalImageThatWasClicked.animal;
        if (animalThatWasClicked === this.animals[this.currentAnimalIndex]) {
            alert('Bravo!');
            this.randomizeAnimal();
            this.repeatSound();
        } else {
            alert('Sorry, try again...');
            this.repeatSound();
        }
    }

    start() {
        this.root.addEventListener('click', this.checkClick.bind(this));
        const instructionText = document.querySelector('.instructions');
        const intro = document.querySelector('.intro');
        intro.style.display = 'none';
        instructionText.style.display = 'block';
        this.randomizeAnimal();
        this.repeatSound();

        for (let a of animals) {
            a.appendTo(this.root);
        }
    }

    randomizeAnimal() {
        this.currentAnimalIndex = Math.floor(Math.random() * this.animals.length);
    }

    repeatSound() {
        this.animals[this.currentAnimalIndex].play();
    }
}

class Animal {
    constructor(img, sound) {
        this.imageSource = img;
        this.audio = new Audio(sound);
    }

    appendTo(el) {
        const img = document.createElement('img');
        img.src = this.imageSource;
        img.animal = this;
        el.appendChild(img);
    }

    play() {
        this.audio.play();
    }

    stop() {
        this.audio.pause();
    }
}

const animals = [
    new Animal("img/camel.jpg", "mp3/camel.mp3"),
    new Animal("img/dog.jpg", "mp3/bark.mp3"),
    new Animal("img/dolphin.jpg", "mp3/dolphin.mp3"),
    new Animal("img/kitten.jpg", "mp3/kitten.mp3"),
];

// Create all the animals
const container = document.querySelector('.animals');
const game = new Game(container, animals);

// Connect start button to game
const startButton = document.querySelector('#start');
startButton.addEventListener('click', game.start);

// Connect repeat button to game
const repeatButton = document.querySelector('#repeat-sound');
repeatButton.addEventListener('click', game.repeatSound);


