class Counter {
    constructor() {
        this.val = 0;
        // this.inc = this.inc.bind(this);
    }
    
    inc = () => {
        this.val++;
        log.innerHTML = this.val;
    }
}

const c = new Counter();

const btn = document.querySelector('button');
/*
btn.addEventListener('click', function() {
    // "this" is the button
    c.inc();
});
*/

// btn.addEventListener('click', c.inc.bind(c));
btn.addEventListener('click', c.inc);
