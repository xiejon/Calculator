let displayVal = 0;
let obj = [];
let numEntered;         // boolean if num has been selected to prevent double operations
let operatorPressed;    // boolean if operator has been selected to clear display upon further number entries
let result;
let decimal;            // boolean if decimal already used

// basic operation functions
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

const container = document.querySelector('.container');
const display = container.querySelector('.result');

// populate display with numbers
const numbers = document.querySelectorAll('.number');
for (const number of numbers) {
    number.addEventListener('click', e => {
        if (operatorPressed) {
            display.textContent = '';
            operatorPressed = false;
        }
        disableDecimal(display.textContent);
        display.textContent += `${e.target.textContent}`
        numEntered = true;
    });
}

// clear display button
const clear = document.querySelector('.clear'); 
clear.addEventListener('click', e => { 
    display.textContent = '';
    obj = [];
    enableDecimal();
}); 

function disableDecimal(display) {                     // prevent multiple decimal points
    for (char of display) {
        if (char === '.') {
            document.querySelector('#dec').disabled = true;
            return;
        }
    }
}

function enableDecimal() {
    document.querySelector('#dec').disabled = false;
}

// add entries to array
function addObject(num, operation) {
    obj.push({number: num, operator: operation});
}

function operatorListener(e) {
    enableDecimal();

    if (numEntered) {
        let operation = e.target.id;            
        let firstNum = display.textContent;

        if (firstNum.length != 0) {        
            addObject(firstNum, operation);
        }

        update();
        numEntered = false;
    }

    if (equalsPressed) {
        result = display.textContent;
        equalsPressed = false;
        operatorListener();
    }

    operatorPressed = true;
    console.log(obj);
};

function update() {
    if (obj.length === 1) {
        result = display.textContent;
    } else if (obj.length === 2) {
        result = operate(obj[0].operator, parseFloat(obj[0].number), parseFloat(obj[1].number));
    } else if (obj.length > 2) {
        result = operate(obj[obj.length - 2].operator, parseFloat(result), parseFloat(obj[obj.length - 1].number));
    }
    display.textContent = result;
}

const operators = document.querySelectorAll('.operator');                   
for (const operator of operators) {
    operator.addEventListener('click', operatorListener);
}

let equalsPressed = false;          
function equals() {
    const equal = document.querySelector('.equals');
    equal.addEventListener('click', (e) => {
        obj.push({number: display.textContent});        // push latest number to array
        update();           

        result = display.textContent;                   // store current total

        equalsPressed = true;
        obj = [];                                       // clear array to allow for new entries
    });
}
equals();

console.log(obj);
