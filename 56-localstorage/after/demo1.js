const btn = document.querySelector('button');
const result = document.querySelector('#value');

let val = Number(localStorage.getItem('value'));
result.textContent = val;

function inc() {
    result.textContent = ++val;
    localStorage.setItem('value', val);
}

btn.addEventListener('click', inc);
