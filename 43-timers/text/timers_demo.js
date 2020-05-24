const startTimeoutDemo = document.querySelector('#start-timeout-demo');
const cancelTimeoutDemo = document.querySelector('#cancel-timeout-demo');
const result1 = document.querySelector('#result1');
let t1, t2;

function showSecondMessage() {
    result1.textContent = 'Bye ...';
}

function showFirstMessage() {
    result1.textContent = 'Hi :)';    
}

function start() {
    result1.textContent = 'Wait for it...';
    t1 = setTimeout(function() {
        showFirstMessage();
    }, 1000);

    t2 = setTimeout(function() {
        showSecondMessage();        
    }, 2000);
}

function cancel() {
    result1.textContent = '';
    clearTimeout(t1);
    clearTimeout(t2);
}

startTimeoutDemo.addEventListener('click', start);
cancelTimeoutDemo.addEventListener('click', cancel);
