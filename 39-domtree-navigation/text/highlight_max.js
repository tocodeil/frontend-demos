const ul = document.querySelector('.numbers');
let max = ul.firstChild;

for ( let element of ul.childNodes ) {
  if (Number(element.textContent) > Number(max.textContent)) {
    max = element;
  }
}

if (max) {
  max.classList.add('max');
}

