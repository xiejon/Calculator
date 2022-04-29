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

// populate display with numbers
const numbers = document.querySelectorAll('.number');
for (const number of numbers) {
    number.addEventListener('click', e => display.textContent += `${e.target.textContent}`);
}

// clear display button
const clear = document.querySelector('.clear'); 
clear.addEventListener('click', e => display.textContent = ''); 




const operators = document.querySelectorAll('.operator');

let obj = [];

for (const operator of operators) {
    operator.addEventListener('click', operatorListener);
}
function operatorListener(e) {
    let operation = e.target.id;            
    let firstNum = display.textContent;      

    addToArray(firstNum, operation);

    display.textContent = '';

    console.log(obj);
};

function addToArray (num, operation) {
    obj.push({number: num, operator: operation});
}

console.log(obj);
// ideas: array to store values? once operator is clicked, store number