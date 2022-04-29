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
let obj = [];   

const container = document.querySelector('.container');
const display = container.querySelector('.result');

// populate display with numbers
const numbers = document.querySelectorAll('.number');
for (const number of numbers) {
    number.addEventListener('click', e => display.textContent += `${e.target.textContent}`);
}

// clear display button
const clear = document.querySelector('.clear'); 
clear.addEventListener('click', e => { 
    display.textContent = '';
    obj = [];
}); 

function addToArray(num, operation) {
    obj.push({number: num, operator: operation});
}

function operatorListener(e) {
    let operation = e.target.id;            
    let firstNum = display.textContent;
    if (firstNum.length != 0) {        
        addToArray(firstNum, operation);
    }
    display.textContent = '';
    console.log(obj);
};

const operators = document.querySelectorAll('.operator');                   
for (const operator of operators) {
    operator.addEventListener('click', operatorListener);
}

function equalsListener() {
    const equal = document.querySelector('.equals');
    equal.addEventListener('click', (e) => {
        obj.push({number: display.textContent});        // push latest number to array
        let result = operate(obj[0].operator, parseInt(obj[0].number), parseInt(obj[1].number));    // initialize result with first 2 array entries
        for (let i = 1; i < obj.length - 1; i++){
            result = operate(obj[i].operator, result, parseInt(obj[i + 1].number));
        }
        display.textContent = result;
    });
}
equalsListener();

console.log(obj);
// ideas: array to store values? once operator is clicked, store number