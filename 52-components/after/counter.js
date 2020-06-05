class Counter {
    // NEVER USE document.querySelector INSIDE A COMPONENT
    constructor(el) {
        this.val = 0;
        el.innerHTML = `
        <button>Click To Inc</button>
        <p class="log"></p>        
        `
        this.log = el.querySelector('.log');
        this.root = el;
        el.querySelector('button').addEventListener('click', this.inc);
    }
     
    inc = () => {
        this.val++;
        this.log.innerHTML = this.val;
    }
}

for (let i=0; i < 3; i++) {
    const e1 = document.createElement('div');
    document.body.appendChild(e1);
    const c1 = new Counter(e1);    
}
