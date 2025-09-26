// Функция для запуска кода
async function runGoCode(playgroundId) {
    const code = document.getElementById(`go-code-${playgroundId}`).value;
    const output = document.getElementById(`output-${playgroundId}`);

    output.textContent = '🚀 Запуск...';

    try {
        // Используем официальный Go Playground API
        const response = await fetch('https://play.golang.org/compile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `body=${encodeURIComponent(code)}`
        });

        const result = await response.json();

        if (result.Errors) {
            output.textContent = `❌ Ошибка:\n${result.Errors}`;
        } else if (result.Events) {
            let outputText = '';
            result.Events.forEach(event => {
                if (event.Message) {
                    outputText += event.Message;
                }
            });
            output.textContent = outputText || '✅ Программа выполнена успешно (нет вывода)';
        }
    } catch (error) {
        output.textContent = `❌ Ошибка сети: ${error.message}`;
    }
}

// Функция для форматирования кода
async function formatGoCode(playgroundId) {
    const textarea = document.getElementById(`go-code-${playgroundId}`);
    const code = textarea.value;

    try {
        const response = await fetch('https://play.golang.org/fmt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `body=${encodeURIComponent(code)}`
        });

        const result = await response.json();

        if (result.Error) {
            alert(`Ошибка форматирования: ${result.Error}`);
        } else {
            textarea.value = result.Body;
        }
    } catch (error) {
        alert('Ошибка при форматировании кода');
    }
}

// Вспомогательные функции
function resetGoCode(playgroundId) {
    const textarea = document.getElementById(`go-code-${playgroundId}`);
    const output = document.getElementById(`output-${playgroundId}`);
    textarea.value = '';
    output.textContent = '';
}

function clearOutput(playgroundId) {
    document.getElementById(`output-${playgroundId}`).textContent = '';
}

// Подсветка синтаксиса в реальном времени (опционально)
function initCodeEditors() {
    document.querySelectorAll('.go-code-textarea').forEach(textarea => {
        textarea.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = this.selectionStart;
                const end = this.selectionEnd;

                this.value = this.value.substring(0, start) +
                    '    ' +
                    this.value.substring(end);

                this.selectionStart = this.selectionEnd = start + 4;
            }
        });
    });
}

// Инициализация после загрузки страницы
document.addEventListener('DOMContentLoaded', initCodeEditors);