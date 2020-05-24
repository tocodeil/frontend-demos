let html = "";

for (let i=1; i < 10; i++) {
    html += '<tr>';
    for (let j=1; j < 10; j++) {
        html += `<td>${i * j}</td>`;
    }
    html += '</tr>';
}

console.log(html);

// document.querySelector('table').textContent = html;
document.querySelector('table').innerHTML = html;

document.body.style.backgroundColor = 'orange';