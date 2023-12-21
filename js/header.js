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

// const dropdownButton = document.querySelector('.dropdown-btn');
// const dropdownMenu = document.querySelector('.dropdown-list');

// dropdownButton.addEventListener('click', () => {
//     if (dropdownMenu.classList.contains ('disp-dropdown') == true){
//         dropdownMenu.classList.remove('disp-dropdown');
//     } else {
//         dropdownMenu.classList.add ('disp-dropdown');
//     }
// })

