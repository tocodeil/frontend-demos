const btn = document.querySelector('button');
const result = document.querySelector('#value');

let val = Number(localStorage.getItem('counter')) || 0;
result.textContent = val;


function inc() {
    result.textContent = ++val;
    localStorage.setItem('counter', val);
}

btn.addEventListener('click', inc);
