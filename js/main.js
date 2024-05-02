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
    const codeJsParagraphSelectors = ['.info-paragraph_code-js'];
    const codeHtmlBlockSelectors = ['.info-block_code-html'];
    const codeJsBlockSelectors = ['.info-block_code-js'];
    const codeCssBlockSelectors = ['.info-block_code-css'];
    const codeJsBlockTextSelectors = ['.info-js-block-text'];
    const codeJsBlockInfoTextSelectors = ['.info-js-text'];
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
codeJsParagraphSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-paragraph_code-js_dark-theme', isDarkMode);
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
codeJsBlockSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-block_code-js_dark-theme', isDarkMode);
    });
});
codeJsBlockTextSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-js-block-text_dark-theme', isDarkMode);
    });
});
codeJsBlockInfoTextSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-js-text-dark-theme', isDarkMode);
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
const jsParagraphSelectors = ['.info-paragraph_code-js'];
const jsBlockSelectors = ['.info-js-block'];
const jsTextSelectors = ['.info-js-block-text'];
const jsTextInfoSelectors = ['.info-js-text'];
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

jsParagraphSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-paragraph_code-js_dark-theme', isDarkMode);
    });
});

jsBlockSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-block_code-js_dark-theme', isDarkMode);
    });
});

jsTextSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-js-block-text_dark-theme', isDarkMode);
    });
});

jsTextInfoSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-js-text-dark-theme', isDarkMode);
    });
});

textHtmlSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle('info-html-text_dark-theme', isDarkMode);
    });
});
}



