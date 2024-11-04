const close = document.querySelector('.close');
const popup = document.querySelector('.popup-container');
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const prevColor = document.querySelector('#prevColor');
const nextColor = document.querySelector('#nextColor');
const listOne = document.querySelector('#listOne');
const listTwo = document.querySelector('#listTwo');


const ani1 = listOne.getAttribute('data-ani');
const ani2 = listTwo.getAttribute('data-ani');

close.addEventListener('click', () => {
    popup.style.display = 'none';
});
menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
})
next.addEventListener('click', () => {
    console.log(next.style.fill)
    if (next.style.fill == 'rgb(51, 51, 51)') {
        listOne.classList.add('animated', ani1);
        window.setTimeout(function () {
            listOne.classList.remove('animated', ani1);
        }, 3000);
        listOne.classList.add('hide');
        listTwo.classList.remove('hide');
        listTwo.classList.add('animated', ani2);
        window.setTimeout(function () {
            listTwo.classList.remove('animated', ani2);
        }, 3000);
        next.style.fill = 'rgb(153, 153, 153)';
        prev.style.fill = 'rgb(51, 51, 51)';
        nextColor.setAttribute('fill', 'rgb(153, 153, 153)');
        prevColor.setAttribute('fill', 'rgb(51, 51, 51)')
    }
})
prev.addEventListener('click', () => {
    console.log(prev.style.fill)
    if (prev.style.fill == 'rgb(51, 51, 51)') {
        listTwo.classList.add('animated', ani1);
        window.setTimeout(function () {
            listTwo.classList.remove('animated', ani1);
        }, 3000);
        listTwo.classList.add('hide');
        listOne.classList.remove('hide');
        listOne.classList.add('animated', ani1);
        window.setTimeout(function () {
            listOne.classList.remove('animated', ani1);
        }, 3000);
        prev.style.fill = 'rgb(153, 153, 153)';
        next.style.fill = 'rgb(51, 51, 51)';
        prevColor.setAttribute('fill', 'rgb(153, 153, 153)');
        nextColor.setAttribute('fill', 'rgb(51, 51, 51)')
    }
})

