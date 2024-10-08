let score = 0;
let currentTask = {};
const scoreDisplay = document.getElementById('score');
const taskDisplay = document.getElementById('task');
const answerInput = document.getElementById('answer');
const resultDisplay = document.getElementById('result');
const nextButton = document.getElementById('nextButton');

function generateTask() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentTask = { num1, num2, answer: num1 * num2 };
    taskDisplay.innerText = `Скільки буде ${num1} * ${num2}?`;
    answerInput.value = '';
    resultDisplay.innerText = '';
    nextButton.style.display = 'none';
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === currentTask.answer) {
        score++;
        resultDisplay.innerText = 'Правильно!';
    } else {
        resultDisplay.innerText = `Помилка, правильна відповідь: ${currentTask.answer}`;
    }
    scoreDisplay.innerText = `Загальний рахунок: ${score}`;
    nextButton.style.display = 'inline';
}

document.getElementById('checkButton').addEventListener('click', checkAnswer);
nextButton.addEventListener('click', generateTask);

generateTask();
