function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2 ;
}

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else return;
}

// populate display
let displayVal = 0;

const container = document.querySelector('.container');
const display = container.querySelector('.result');

const numbers = document.querySelectorAll('.number');
console.log(numbers);

for (const number of numbers) {
    number.addEventListener('click', function(e) {
        display.textContent = `${e.target.textContent}`;
    });
}