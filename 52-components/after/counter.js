class Counter {
    constructor(el) {
        this.val = 0;
        this.setupUi(el);
    }
     
    setupUi(el) {
        el.innerHTML = `
            <button>Click To Inc</button>
            <p class="log"></p>        
        `;
        this.log = el.querySelector('.log');
        this.button = el.querySelector('button');
        this.button.addEventListener('click', this.inc.bind(this));
    }

    inc = () => {
        this.val++;
        this.log.innerHTML = this.val;
    }
}

const e1 = document.createElement('div');
const c1 = new Counter(e1);
document.body.appendChild(e1);

const e2 = document.createElement('div');
const c2 = new Counter(e2);
document.body.appendChild(e2);
