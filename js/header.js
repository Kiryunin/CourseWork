const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    if (menu.classList.contains('disp') == true ) { 
        menu.classList.remove('disp');
        menuButton.classList.add('adaptive__burger-active');
    } else {
        menu.classList.add ('disp');
        menuButton.classList.remove('adaptive__burger-active');
    }
})


