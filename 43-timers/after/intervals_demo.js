(function() {
    const startIntervalDemo = document.querySelector('#start-interval-demo');
const cancelIntervalDemo = document.querySelector('#cancel-interval-demo');
const result2 = document.querySelector('#result2');

const texts = ['', 'hi', 'wait for it ....', 'surprise'];
let index = 0;
let timer;

function showNextMessage() {
    index = (index + 1) % texts.length;
    result2.textContent = texts[index];
    /*
    if (index === 0) {
        stop();
    }
    */
}

function stop() {
    clearInterval(timer);
    result2.textContent = '';
}

startIntervalDemo.addEventListener('click', () => {
    showNextMessage();
    timer = setInterval(showNextMessage, 2000);
});

cancelIntervalDemo.addEventListener('click', stop);

}());
