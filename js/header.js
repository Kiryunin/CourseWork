const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    if (menu.classList.contains('disp') == true ) { 
        menu.classList.remove('disp');
    } else {
        menu.classList.add ('disp');
    }
})

const navButton = document.querySelector('#navButton');
const nav = document.querySelector('#nav');

navButton.addEventListener('click', () => {
    if (nav.classList.contains('disp') == true ) { 
        nav.classList.remove('disp');
    } else {
        nav.classList.add('disp');
    }
})