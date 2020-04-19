function writeTextToAllBoxes(text) {
    const inputs = document.querySelectorAll('input');
    for (let inp of inputs) {
        inp.value = text;
    }
}

function handleInputEvent(ev) {
    writeTextToAllBoxes(ev.target.value);
}

const inputs = document.querySelector('.inputs');
inputs.addEventListener('input', handleInputEvent);

const addTextButton = document.querySelector('#add-input');
addTextButton.addEventListener('click', function() {
    const container = document.querySelector('.inputs');
    const input = document.createElement('input');
    container.appendChild(input);    
});