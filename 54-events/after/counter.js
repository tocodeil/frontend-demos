class Counter {
  constructor(el, bus) {
    this.val = 0;
    this.setupUi(el);
    this.bus = bus;
  }

  setupUi(el) {
    el.innerHTML = `
            <p>
            <button>Click To Inc</button>
            <span class="log"></span>
            </p>
        `;
    this.log = el.querySelector('.log');
    this.button = el.querySelector('button');
    this.button.addEventListener('click', this.inc.bind(this));
    this.updateUi();
  }

  inc = () => {
    this.val++;
    this.bus.emit('value', this.val);
    this.updateUi();
  }

  updateUi() {
    this.log.innerHTML = this.val;
  }
}

