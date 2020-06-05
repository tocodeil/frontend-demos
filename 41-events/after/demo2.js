const inputs = document.querySelectorAll('input');

function writeToAllInputs(text) {
    for (let inp of inputs) {
        inp.value = text;
    }
}


function handleTextChangeInBox(event) {
    writeToAllInputs(event.target.value);
}

for (let inp of inputs) {
    inp.addEventListener('input', handleTextChangeInBox);
}

writeToAllInputs('hello!');