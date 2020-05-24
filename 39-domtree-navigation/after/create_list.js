const ul = document.querySelector('.numbers');

const frag = document.createDocumentFragment();

for (let i=0; i < 10; i++) {
    const li = document.createElement('li');
    li.textContent = i * i;
    frag.appendChild(li);
}

ul.appendChild(frag);