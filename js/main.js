document.addEventListener("DOMContentLoaded", function () {
    let scrollButton = document.getElementById('goTop');

    // Показываем или скрываем кнопку при прокрутке
    window.onscroll = function () {
        if (document.body.scrollTop > document.documentElement.clientHeight / 2 ||
            document.documentElement.scrollTop > document.documentElement.clientHeight / 2) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    };

    // Прокрутка вверх при клике на кнопку
    scrollButton.onclick = function () {
        scrollToTop();
    };

    // Функция прокрутки вверх
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});

document.addEventListener('DOMContentLoaded', function () {
// Получение элемента .wrapper-background
const wrapperBackground = document.querySelector('.wrapper-background');

// Получение значения из localStorage
const isDarkMode = localStorage.getItem('darkmode') === 'true';

// Установка класса в зависимости от темы
wrapperBackground.classList.toggle('dark-mode', isDarkMode);

// Получение элементов темы
const sunThemeSwitch = document.querySelector('.header__theme-switch_sun');
const nightThemeSwitch = document.querySelector('.header__theme-switch_night');

// Установка видимости элементов в зависимости от текущей темы
sunThemeSwitch.style.display = isDarkMode ? 'none' : 'flex';
nightThemeSwitch.style.display = isDarkMode ? 'flex' : 'none';
});
  
function darkMode() {
const wrapperBackground = document.querySelector('.wrapper-background');
const sunThemeSwitch = document.querySelector('.header__theme-switch_sun');
const nightThemeSwitch = document.querySelector('.header__theme-switch_night');
const wasDarkMode = localStorage.getItem('darkmode') === 'true';

// Изменение темы
localStorage.setItem('darkmode', !wasDarkMode);
wrapperBackground.classList.toggle('dark-mode', !wasDarkMode);

// Переключение между изображениями солнца и луны
sunThemeSwitch.style.display = !wasDarkMode ? 'none' : 'flex';
nightThemeSwitch.style.display = !wasDarkMode ? 'flex' : 'none';
}
  
// Навешивание обработчика на переключатель темы
document.querySelector('.header__theme-switch_sun').addEventListener('click', darkMode);
document.querySelector('.header__theme-switch_night').addEventListener('click', darkMode);

