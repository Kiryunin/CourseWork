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

    // Обновление стилей для блоков кода
    updateCodeBlockStyles(isDarkMode);
});

function darkMode() {
    const wrapperBackground = document.querySelector('.wrapper-background');
    const sunThemeSwitch = document.querySelector('.header__theme-switch_sun');
    const nightThemeSwitch = document.querySelector('.header__theme-switch_night');
    const isDarkMode = localStorage.getItem('darkmode') === 'true';

    // Изменение темы
    localStorage.setItem('darkmode', String(!isDarkMode));
    wrapperBackground.classList.toggle('dark-mode', !isDarkMode);

    // Переключение между изображениями солнца и луны
    sunThemeSwitch.style.display = isDarkMode ? 'flex' : 'none';
    nightThemeSwitch.style.display = isDarkMode ? 'none' : 'flex';

    // Обновление стилей для блоков кода
    updateCodeBlockStyles(!isDarkMode);
}

// Навешивание обработчика на переключатель темы
document.querySelector('.header__theme-switch_sun').addEventListener('click', darkMode);
document.querySelector('.header__theme-switch_night').addEventListener('click', darkMode);

// Функция для обновления стилей блоков кода
function updateCodeBlockStyles(isDarkMode) {
    const codeHtmlParagraphSelectors = ['.info-paragraph_code-html'];
    const codeCssParagraphSelectors = ['.info-paragraph_code-css'];
    const codeHtmlBlockSelectors = ['.info-block_code-html'];
    const codeCssBlockSelectors = ['.info-block_code-css'];
    const codeTextHtmlSelectors = ['.info-html-text_dark-theme'];

// Обновление стилей для кода CSS
codeHtmlParagraphSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-paragraph_code-html_dark-theme', isDarkMode);
    });
});
codeCssParagraphSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-paragraph_code-css_dark-theme', isDarkMode);
    });
});
codeHtmlBlockSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-block_code-html_dark-theme', isDarkMode);
    });
});
codeCssBlockSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-block_code-css_dark-theme', isDarkMode);
    });
});
codeTextHtmlSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-html-text_dark-theme', isDarkMode);
    });
});

const htmlParagraphSelectors = ['.info-paragraph_code-html'];
const htmlBlockSelectors = ['.info-block_code-html'];
const cssParagraphSelectors = ['.info-paragraph_code-css'];
const cssBlockSelectors = ['.info-block_code-css'];
const textHtmlSelectors = ['.info-html-text'];

// Обновление стилей для кода HTML
htmlParagraphSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-paragraph_code-html_dark-theme', isDarkMode);
    });
});

htmlBlockSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-block_code-html_dark-theme', isDarkMode);
    });
});

cssParagraphSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-paragraph_code-css_dark-theme', isDarkMode);
    });
});

cssBlockSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-block_code-css_dark-theme', isDarkMode);
    });
});

textHtmlSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-html-text_dark-theme', isDarkMode);
    });
});
}



