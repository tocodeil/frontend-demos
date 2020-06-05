(function() {
    const startIntervalDemo = document.querySelector('#start-interval-demo');
    const cancelIntervalDemo = document.querySelector('#cancel-interval-demo');
    const result2 = document.querySelector('#result2');

    const texts = ['Wait for it...', 'Hi!', 'bye', ''];
    let index = 0;
    let timerId;
    
    function tick() {
        result2.textContent = texts[index];
        index = (index + 1) % texts.length;
    }
    
    startIntervalDemo.addEventListener('click', function() {
        timerId = setInterval(tick, 1000);
    });
    
    cancelIntervalDemo.addEventListener('click', function() {
        clearTimeout(timerId);
    });    
}());
