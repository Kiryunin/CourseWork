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