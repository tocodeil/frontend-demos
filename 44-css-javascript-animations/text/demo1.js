const imageCount = document.querySelectorAll('.image-slider img').length;
const container = document.querySelector('.images');
const imageWidth = 400;
const lastImageOffset = -400 * (imageCount - 1);

function nextImage() {
    const currentOffset = parseInt(container.style.left) || 0;
    if (currentOffset === lastImageOffset) {
        container.style.left = '0px';
    } else {
        const left = (currentOffset - 400) + "px";
        container.style.left = left;
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', nextImage);