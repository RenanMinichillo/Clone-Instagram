window.addEventListener('load', () => {
    const loading = document.querySelector('#loading');

    setTimeout(() => {    
        loading.style.display = 'none';
        interfaceTop.style.display = 'block';
        interfaceBottom.style.display = 'block';
        window.scroll({
            top: 1,
        })
    }, 3000);
})

const interfaceTop = document.querySelector('.interface');
const interfaceBottom = document.querySelector('footer');

let time = 5000;
let currentIndex = 0;
let carrossel = document.querySelectorAll('.c-images');
let max = carrossel.length;

const nextImage = () => {
    carrossel[currentIndex].classList.remove('selected');
    currentIndex++;
    if (currentIndex >= max) {
        currentIndex = 0;
    }
    carrossel[currentIndex].classList.add('selected');
};

const start = () => {
    setInterval(() => {
        nextImage();
    }, time);
};

window.addEventListener('load', start)