const box = document.querySelector('#box');
function runaway() {
    const width = document.body.clientWidth - 100;
    const x = Math.random() * width;
    const height = document.body.clientHeight - 100;
    const y = Math.random() * height;
    console.log(x, y);
    // Velocity(box, 'jello', { duration: 500 });
    // Velocity(box, { left: x, top: y }, { duration: 500 });
    box.style.left = x + 'px';
    box.style.top = y + 'px';
}

runaway();
box.addEventListener('click', runaway);