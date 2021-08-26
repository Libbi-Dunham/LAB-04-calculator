import { multiply } from './calculator.js';


const multiplyNumber12 = document.getElementById('multiply-number-12');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

multiplyButton.addEventListener('click', () => {
    const num12 = Number(multiplyNumber12.value);
    const num2 = Number(multiplyNumber2.value);
    const sum = multiply(num12, num2);
    multiplyAnswer.textContent = sum;
});

