class Counter {
    constructor() {
        this.val = 0;
    }
    
    inc() {
        this.val++;
        log.innerHTML = this.val;
    }
}

const c = new Counter();

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    c.inc();
});
