const imageCount = document.querySelectorAll('.image-slider img').length;
const container = document.querySelector('.images');
const nextImageButton = document.querySelector('button');
const imageWidth = 400;
container.style.left = 0;

function nextImage() {    
    const currentLeftValue = parseFloat(container.style.left);
    if (currentLeftValue === -800) {
        container.style.left = '0px';
    } else {
        container.style.left = (currentLeftValue - 400) + 'px';
    }
    
}

nextImageButton.addEventListener('click', nextImage);