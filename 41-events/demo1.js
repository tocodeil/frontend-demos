const alertButton = document.querySelector('#alert-button');

function showAlert() {
    alert('Hello World');
}

alertButton.addEventListener('click', showAlert);




function showWinner() {
    const result = document.querySelector('#winner');
    result.textContent = 'You :)'
    btn.style.display = 'none';
}
const btn = document.querySelector('#show-winner');
btn.addEventListener('click', showWinner);

// Or - using inline functions:
/*
btn.addEventListener('click', function() {
    const result = document.querySelector('#winner');
    result.textContent = 'You :)'
    btn.style.display = 'none';
});
*/

// Or - using arrow functions
/*
btn.addEventListener('click', () => {
    const result = document.querySelector('#winner');
    result.textContent = 'You :)'
    btn.style.display = 'none';
});
*/