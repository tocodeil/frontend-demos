class Display {
    constructor(el, bus) {
        this.setupUi(el);
        this.eventBus = bus;
        this.eventBus.subscribe('value', this.updateUi.bind(this));
    }
     
    setupUi(el) {
        el.innerHTML = `
            <p>And the maximum value is: <span class="maxvalue"></span></p>
        `;
        this.panel = el.querySelector('.maxvalue');
    }

    updateUi(value) {
        if (value > Number(this.panel.textContent)) {
            this.panel.textContent = value;
        }
    }
}

