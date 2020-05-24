class Counter {
    constructor() {
        this.val = 0;
    }
     
    inc = () => {
        this.val++;
        log.innerHTML = this.val;
    }
}
