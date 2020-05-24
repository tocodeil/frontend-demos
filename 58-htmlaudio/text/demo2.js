const audioElement = new Audio('mp3/birds.mp3');

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    setTimeout(function() {
        audioElement.play();
    }, 1000);
});

