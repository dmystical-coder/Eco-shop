const close = document.querySelector('.close');
const popup = document.querySelector('.popup-container');
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

close.addEventListener('click', () => {
    popup.style.display = 'none';
});
menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
})