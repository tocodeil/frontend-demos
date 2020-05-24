const audioElement = new Audio('mp3/birds.mp3');

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    audioElement.play();
    // audioElement.pause();
    // audioElement.currentTime = 60; // 60 seconds
});

