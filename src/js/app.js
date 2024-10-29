const close = document.querySelector('.close');
const popup = document.querySelector('.popup-container');

close.addEventListener('click', () => {
    popup.style.display = 'none';
})