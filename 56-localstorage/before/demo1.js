const btn = document.querySelector('button');
const result = document.querySelector('#value');

let val = 0;
result.textContent = val;

function inc() {
    result.textContent = ++val;
}

btn.addEventListener('click', inc);
