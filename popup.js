// Функция для замены домена и открытия новой ссылки
function openModifiedLink(originalUrl) {
    // Проверяем, что ссылка содержит "kinopoisk.ru"
    if (originalUrl.includes('kinopoisk.ru')) {
        // Заменяем "kinopoisk.ru" на "sspoisk.ru"
        let modifiedUrl = originalUrl.replace('kinopoisk.ru', 'sspoisk.ru');
        // Открываем новую ссылку в новом окне
        window.open(modifiedUrl, '_blank');
    } else {
        alert('Ссылка не относится к kinopoisk.ru');
    }
}

// Получаем элементы из DOM
const customLinkInput = document.getElementById('customLink');
const replaceCustomButton = document.getElementById('replaceCustomButton');

// Добавляем обработчик клика на кнопку
replaceCustomButton.addEventListener('click', function () {
    // Получаем значение из поля ввода
    let userInputUrl = customLinkInput.value.trim();

    // Проверяем, что пользователь ввёл ссылку
    if (userInputUrl) {
        // Вызываем функцию для изменения ссылки и открытия её в новом окне
        openModifiedLink(userInputUrl);
    } else {
        // Если поле пустое, показываем сообщение об ошибке
        alert('Пожалуйста, введите ссылку!');
    }
});