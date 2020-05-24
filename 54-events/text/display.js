class Display {
  constructor(el, bus) {
    this.setupUi(el);
    this.eventBus = bus;
    this.eventBus.subscribe('value', this.update.bind(this));
  }

  setupUi(el) {
    el.innerHTML = `
            <p>And the maximum value is: <span class="maxvalue"></span></p>
        `;
    this.panel = el.querySelector('.maxvalue');
  }

  update(val) {
    if (val > Number(this.panel.textContent)) {
      this.panel.textContent = val;
    }
  }
}

