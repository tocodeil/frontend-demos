const instructions = document.querySelector('.instructions');
const intro = document.querySelector('.intro');

class Game {
    constructor(root, animals) {
        this.start = this.start.bind(this);
        this.checkClick = this.checkClick.bind(this);
        this.repeatSound = this.repeatSound.bind(this);

        this.animals = animals;
        this.el = root;
        this.el.addEventListener('click', this.checkClick);
    }

    repeatSound() {
        this.animals[this.currentAnimalIndex].play();
    }

    checkClick(ev) {
        if (ev.target.nodeName !== 'IMG') return;
        const animal = ev.target.animal;
        if (animal === this.animals[this.currentAnimalIndex]) {
            alert('Bravo!');
            animal.stop();
            this.start();
        } else {
            alert('Try again...');
        }
    }

    randomizeAnimal() {
        this.currentAnimalIndex = Math.floor(Math.random() * this.animals.length);        
    }

    start() {
        this.randomizeAnimal();
        this.animals[this.currentAnimalIndex].play();
        instructions.style.display = 'block';
        intro.style.display = 'none';
    }
}

class Animal {
    constructor(image, sound) {
        this.imageSource = image;
        this.soundSource = sound;
        this.sound = new Audio(this.soundSource);
    }

    play() {
        this.sound.play();
    }

    stop() {
        this.sound.pause();
    }

    render(container) {
        const img = document.createElement('img');
        img.src = this.imageSource;
        img.animal = this;
        container.appendChild(img);
    }
}

const animals = [
    new Animal("img/camel.jpg", "mp3/camel.mp3"),
    new Animal("img/dog.jpg", "mp3/bark.mp3"),
    new Animal("img/dolphin.jpg", "mp3/dolphin.mp3"),
    new Animal("img/kitten.jpg", "mp3/kitten.mp3"),
];

const container = document.querySelector('.animals');
const game = new Game(container, animals);
animals.forEach((a) => a.render(container));
instructions.style.display = 'none';

const startButton = intro.querySelector('button');
startButton.addEventListener('click', game.start);

const repeatButton = instructions.querySelector('button');
repeatButton.addEventListener('click', game.repeatSound);