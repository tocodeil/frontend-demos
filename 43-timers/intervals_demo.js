const startIntervalDemo = document.querySelector('#start-interval-demo');
const cancelIntervalDemo = document.querySelector('#cancel-interval-demo');
const result2 = document.querySelector('#result2');
let timer;

function start() {
    cancel();
    const messages = ['Wait for it ...', 'Hi ;)', 'Bye'];
    let index = 0;
    function writeNextMessage() {
        result2.textContent = messages[index];
        index = (index + 1) % messages.length;
    }

    timer = setInterval(writeNextMessage, 1000);
    writeNextMessage();
}

function cancel() {
    result2.textContent = '';
    clearInterval(timer);
}

startIntervalDemo.addEventListener('click', start);
cancelIntervalDemo.addEventListener('click', cancel);