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


let displayVal = 0;

const container = document.querySelector('.container');
const display = container.querySelector('.result');

const numbers = document.querySelectorAll('.number');
for (const number of numbers) {
    number.addEventListener('click', function(e) {
        display.textContent += `${e.target.textContent}`; // populate display w/ numbers
    });
}

// clear button
const clear = document.querySelector('.clear');
clear.addEventListener('click', function(e) {
    display.textContent = '';
})

const operators = document.querySelectorAll('.operator');
for (const operator of operators) {
    operators.addEventListener('click')
}

// ideas: array to store values? once operator is clicked, store number?