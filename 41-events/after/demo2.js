function handleTextInBox(event) {    
    const value = event.target.value;
    // const value = event.data;

    for (let box of boxes) {
        box.value = value;
    }
}

const boxes = document.querySelectorAll('input');
for (let box of boxes) {
    box.addEventListener('input', handleTextInBox);
}