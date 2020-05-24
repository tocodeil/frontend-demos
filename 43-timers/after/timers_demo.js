(function() {
    const startTimeoutDemo = document.querySelector('#start-timeout-demo');
    const cancelTimeoutDemo = document.querySelector('#cancel-timeout-demo');
    const result1 = document.querySelector('#result1');
    
    let timer;
    
    function showFirstMessage() {
        if (timer) { return; }
    
        result1.textContent = 'Hi ...';
        timer = setTimeout(showSecondMessage, 2000);
    }
    
    function showSecondMessage() {
        result1.textContent = 'Wait for it...';
        timer = setTimeout(showThirdMessage, 2000);
    }
    
    function showThirdMessage() {
        result1.textContent = 'Surprise!';
        timer = setTimeout(cancel, 2000);
    }
    
    function cancel() {
        clearTimeout(timer);
        timer = null;
        result1.textContent = '';
    }
    
    startTimeoutDemo.addEventListener('click', showFirstMessage);
    cancelTimeoutDemo.addEventListener('click', cancel);
}());
