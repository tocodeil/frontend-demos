const btn = document.querySelector('button');

function start() {
    const box = document.querySelector('#box');
    box.classList.add('animated', 'bounce');
}

function stop() {
    box.classList.remove('bounce');
}

btn.addEventListener('click', function() {
    start();
    setTimeout(stop, 1000);
});