let res = "";

for (let i=1; i < 10; i++) {
    res += '<tr>';
    for (let j=1 ; j < 10; j++) {
        res += `<td>${i * j}</td>`
    } 
    res += '</tr>';
}

console.log(res);

const tbody = document.querySelector('tbody');
tbody.innerHTML = res;

// background-color
document.body.style.backgroundColor = 'lightyellow';