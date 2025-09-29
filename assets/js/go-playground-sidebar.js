// Скрипт для управления песочницей в сайдбаре
document.addEventListener('DOMContentLoaded', function() {
    function movePlaygroundToSidebar() {
        const playgrounds = document.querySelectorAll('.go-playground');
        const sidebarContent = document.querySelector('.playground-sidebar-content');

        if (playgrounds.length > 0 && sidebarContent) {
            // Берем первую песочницу из статьи
            const firstPlayground = playgrounds[0];

            // Клонируем песочницу для сайдбара
            const sidebarPlayground = firstPlayground.cloneNode(true);

            // Очищаем сайдбар и добавляем новую песочницу
            sidebarContent.innerHTML = '';
            sidebarContent.appendChild(sidebarPlayground);

            // Скрываем оригинальную песочницу в статье
            firstPlayground.style.display = 'none';

            // Обновляем ID и обработчики для новой песочницы
            updatePlaygroundIds(sidebarPlayground);
            attachPlaygroundEvents(sidebarPlayground);

            console.log('Песочница перемещена в сайдбар');
        }
    }

    function updatePlaygroundIds(playground) {
        const newId = 'sidebar-playground';
        playground.id = newId;

        // Обновляем все внутренние ID
        const textarea = playground.querySelector('.go-code-textarea');
        const output = playground.querySelector('.output-content');
        const buttons = playground.querySelectorAll('.playground-btn');

        if (textarea) textarea.id = `go-code-${newId}`;
        if (output) output.id = `output-${newId}`;

        buttons.forEach((button, index) => {
            button.id = `btn-${newId}-${index}`;
        });
    }

    function attachPlaygroundEvents(playground) {
        const runButton = playground.querySelector('.playground-btn');
        const textarea = playground.querySelector('.go-code-textarea');
        const output = playground.querySelector('.output-content');

        if (runButton && textarea && output) {
            runButton.onclick = function() {
                runGoCode('sidebar-playground');
            };
        }
    }

    // Запускаем после небольшой задержки для полной загрузки DOM
    setTimeout(movePlaygroundToSidebar, 100);
});