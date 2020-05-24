const numbers = [10, 25, 70, 5, 2, 8];
const ul = document.querySelector('ul');

const frag = document.createDocumentFragment();

const max = Math.max(...numbers);

for (let value of numbers) {
    const li = document.createElement('li');
    li.textContent = value;
    if (value === max) {
        li.classList.add('max');
    }

    frag.appendChild(li);
}

ul.appendChild(frag);