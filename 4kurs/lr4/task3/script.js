let score = 0;
let currentTask = {};
const scoreDisplay = document.getElementById('score');
const taskDisplay = document.getElementById('task');
const optionsDisplay = document.getElementById('options');
const resultDisplay = document.getElementById('result');

function generateTask() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentTask = { num1, num2, answer: num1 * num2 };
    taskDisplay.innerText = `Скільки буде ${num1} * ${num2}?`;
    optionsDisplay.innerHTML = ''
    resultDisplay.innerText = '';

    const correctAnswer = currentTask.answer;
    const options = new Set([correctAnswer]);

    while (options.size < 4) {
        const wrongAnswer = Math.floor(Math.random() * 100) + 1
        options.add(wrongAnswer);
    }

    options.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${option}" onclick="checkAnswer(this)">${option}</label><br>`;
        optionsDisplay.appendChild(label);
    });
}

function checkAnswer(selectedOption) {
    const userAnswer = parseInt(selectedOption.value);
    if (userAnswer === currentTask.answer) {
        score++;
        resultDisplay.innerText = 'Правильно!';
    } else {
        resultDisplay.innerText = `Неправильно! Правильна відповідь: ${currentTask.answer}`;
    }
    scoreDisplay.innerText = `Загальний рахунок: ${score}`;

    const radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach(radio => {
        radio.disabled = true;
    });

    setTimeout(generateTask, 2000);
}

generateTask();
