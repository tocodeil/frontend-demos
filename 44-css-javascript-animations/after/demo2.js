const btn = document.querySelector('button');
const box = document.querySelector('#box');

btn.addEventListener('click', function() {
    box.classList.add('animated', 'bounce');
    setTimeout(function() {
        box.classList.remove('animated', 'bounce');
    }, 1000);
});

