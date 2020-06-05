class Display {
    constructor(el, bus) {
        this.setupUi(el);
        bus.on('value', this.update);
    }

    update = (newValue) => {
        const currentValue = Number(this.panel.textContent);
        if (newValue > currentValue) {
            this.panel.textContent = newValue;
        }
    };
     
    setupUi(el) {
        el.innerHTML = `
            <p>And the maximum value is: <span class="maxvalue">0</span></p>
        `;
        this.panel = el.querySelector('.maxvalue');
    }
}

