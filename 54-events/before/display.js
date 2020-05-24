class Display {
    constructor(el) {
        this.setupUi(el);
    }
     
    setupUi(el) {
        el.innerHTML = `
            <p>And the maximum value is: <span class="maxvalue"></span></p>
        `;
        this.panel = el.querySelector('.maxvalue');
    }
}

