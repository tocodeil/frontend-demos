const imageCount = document.querySelectorAll('.image-slider img').length;
const container = document.querySelector('.images');
const nextImageButton = document.querySelector('button');
const imageWidth = 400;

let currentImageIndex = 0;

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= imageCount) {
        currentImageIndex = 0;
    }
    container.style.left = (currentImageIndex * -1 * imageWidth) + 'px';       

}

nextImageButton.addEventListener('click', nextImage);