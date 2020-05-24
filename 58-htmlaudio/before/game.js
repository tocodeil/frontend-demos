const instructions = document.querySelector('.instructions');
const intro = document.querySelector('.intro');

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


