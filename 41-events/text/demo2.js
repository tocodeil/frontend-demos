function writeTextToAllBoxes(text) {
    const inputs = document.querySelectorAll('input');
    for (let inp of inputs) {
        inp.value = text;
    }
}

function handleInputEvent(ev) {
    writeTextToAllBoxes(ev.target.value);
}

const inputs = document.querySelectorAll('input');
for (let input of inputs) {
    input.addEventListener('input', handleInputEvent);
}
