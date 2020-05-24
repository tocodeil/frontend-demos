function handleTextInBox(event) {    
    const value = event.target.value;
    const updatedBoxes = document.querySelectorAll('input');

    // const value = event.data;

    for (let box of updatedBoxes) {
        box.value = value;
    }
}

const container = document.querySelector('.inputs');
container.addEventListener('input', handleTextInBox);

const btn = document.querySelector('#add-input');
btn.addEventListener('click', () => {
    const container = document.querySelector('.inputs');
    const newInput = document.createElement('input');
    container.appendChild(newInput);
});
