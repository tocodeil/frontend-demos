const ul = document.querySelector('.numbers');

let maxEl = ul.firstElementChild;
for (let el of ul.children) {
    if (Number(maxEl.textContent) < Number(el.textContent)) {
        maxEl = el;
    }
}

if (maxEl) {
    maxEl.style.backgroundColor = 'pink';
}