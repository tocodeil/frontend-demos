const btn = document.querySelector('button');
const result = document.querySelector('#value');

let val = Number(localStorage.getItem('count'));
result.textContent = val;

function inc() {
    result.textContent = ++val;
    localStorage.setItem('count', val);
}

btn.addEventListener('click', inc);
