class Counter {
    constructor() {
        this.val = 0;
        // this.inc = this.inc.bind(this);

        /*
        const that = this;
        this.inc = function() {
            Counter.prototype.inc.apply(that);
        }
        */
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
    c.inc();
});
*/
btn.addEventListener('click', c.inc);