const alertButton = document.querySelector('#alert-button');
const showWinnerButton = document.querySelector('#show-winner');

function showAlert() {
    alert('Hahhaha');
}

// Connect event handler to event
alertButton.addEventListener('click', showAlert);
showWinnerButton.addEventListener('click', () => {
        const winnerSpan = document.querySelector('#winner');
        winnerSpan.textContent = 'You!';    
});

