class Counter {
    constructor(el) {
        this.val = 0;
        this.render(el);

        this.inc = this.inc.bind(this);
        this.incButton.addEventListener('click', this.inc);
    }

    render(el) {
        el.innerHTML = `
            <p>
                <button class="inc">Click Me</button>
                Clicks: <span class="log">${this.val}</span>
            </p>    
        `;
        this.el = el;
        this.incButton = el.querySelector('.inc');
        this.log = el.querySelector('.log');
    }
     
    inc() {
        this.val++;
        this.log.textContent = this.val;
    }
}

const c1 = new Counter(document.querySelector('#c1'));
const c2 = new Counter(document.querySelector('#c2'));

const el = document.createElement('div');
document.body.appendChild(el);
const c3 = new Counter(el);