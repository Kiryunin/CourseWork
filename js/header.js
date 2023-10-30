const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    if (menu.classList.contains('disp') == true ) { 
        menu.classList.remove('disp');
        menuButton.style.backgroundColor = 'white';
        menuButton.style.color = 'black';
        menuButton.style.borderRadius = '15px';
    } else {
        menu.classList.add ('disp');
        menuButton.style.backgroundColor = '';
        menuButton.style.color = '';
    }
})

const navButton = document.querySelector('#navButton');
const nav = document.querySelector('#nav');

navButton.addEventListener('click', () => {
    if (nav.classList.contains('disp') == true ) { 
        nav.classList.remove('disp');
        navButton.style.backgroundColor = 'white';
        navButton.style.color = 'black';
        navButton.style.borderRadius = '15px';
    } else {
        nav.classList.add('disp');
        navButton.style.backgroundColor = '';
        navButton.style.color = '';
    }
})