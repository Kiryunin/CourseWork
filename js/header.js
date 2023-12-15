const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');
const goTop = document.querySelector('#goTop')

menuButton.addEventListener('click', () => {
    if (menu.classList.contains('disp') == true ) { 
        menu.classList.remove('disp');
        menuButton.classList.add('adaptive__burger-active');
        goTop.classList.remove('go-top');
    } else {
        menu.classList.add ('disp');
        menuButton.classList.remove('adaptive__burger-active');
        goTop.classList.add('go-top');
    }
})
