(function() {
    const startTimeoutDemo = document.querySelector('#start-timeout-demo');
    const cancelTimeoutDemo = document.querySelector('#cancel-timeout-demo');
    const result1 = document.querySelector('#result1');
    
    const texts = ['Wait for it...', 'Hi!', 'bye', ''];
    let index = 0;
    let timerId;
    
    function tick() {
        result1.textContent = texts[index];
        index = (index + 1) % texts.length;
        timerId = setTimeout(tick, 1000);
    }
    
    startTimeoutDemo.addEventListener('click', function() {
        tick();
    });
    
    cancelTimeoutDemo.addEventListener('click', function() {
        clearTimeout(timerId);
    });    
}());
