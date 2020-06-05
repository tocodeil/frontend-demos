const btn = document.querySelector('#alert-button');

function revealWinner() {
    const el = document.querySelector('#winner');
    el.textContent = 'You!';
}

btn.addEventListener('click', () => {
    alert('Ouch!');
});

btn.addEventListener('click', function() {
    alert('Ouch!');
});


const showWinnweButton = document.querySelector('#show-winner');
showWinnweButton.addEventListener('click', revealWinner);