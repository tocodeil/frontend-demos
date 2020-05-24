class Counters {
    constructor(el) {
        this.el = el;
        this.el.innerHTML = `
            <button>Increase All</button>
        `;

        this.increaseAll = this.increaseAll.bind(this);
        this.incButton = el.querySelector('button');
        this.incButton.addEventListener('click', this.increaseAll);
        this.counters = [];
    }

    increaseAll() {
        this.counters.forEach((counter) => counter.inc());
    }

    addCounters(n=1) {
        for (let i=0; i < n; i++) {
            const counterDiv = document.createElement('div');
            this.counters.push(new Counter(counterDiv));
            this.el.appendChild(counterDiv);
        }
    }
}
const el = document.createElement('div');
document.body.appendChild(el);
const counters = new Counters(el);
counters.addCounters(4);