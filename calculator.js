let obj = [];
let numSelected;                // boolean if num has been selected to prevent double operations
let operatorPressed;            // boolean if operator has been selected to clear display upon further number entries
let result;
let equalsPressed = false;      // boolean if enter has been pressed (to prevent number entries)

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

// prevent user input from overflowing
function checkNumLength() {
    if (display.textContent.length >= 13) {
        for (const number of numbers) {
            number.disabled = true;
        }
    }
}
function enableNum() {
    for (const number of numbers) {
        number.disabled = false;
    }
}

// populate display with numbers
const numbers = document.querySelectorAll('.number');
for (const number of numbers) {
    number.addEventListener('click', e => {

        if (equalsPressed) {
            display.textContent = '';
            equalsPressed = false;
        }
        if (operatorPressed) {
            display.textContent = '';
            operatorPressed = false;
        }

        checkNumLength();
        display.textContent += `${e.target.textContent}`;
        disableDecimal(display.textContent);
        numSelected = true;

        console.log(display.textContent.length);
    });
}

// clear display button
const clear = document.querySelector('.clear'); 
clear.addEventListener('click', e => { 
    display.textContent = '';
    obj = [];
    enableNum();
    enableDecimal();
}); 

// prevent multiple decimal points
function disableDecimal(display) {                     
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

    if (numSelected) {
        let operation = e.target.id;            
        let firstNum = display.textContent;

        if (firstNum.length != 0) {        
            addObject(firstNum, operation);
        }

        update();
        numSelected = false;
    }

    if (equalsPressed) {
        result = display.textContent;
        equalsPressed = false;
        operatorListener();
    }

    enableNum();
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
         
function equals() {
    const equal = document.querySelector('.equals');
    equal.addEventListener('click', (e) => {
        obj.push({number: display.textContent});        // push latest number to array
        update();           

        result = display.textContent;                   // store current total

        enableNum();
        equalsPressed = true;
        obj = [];                                       // clear array to allow for new entries
    });
}
equals();

console.log(obj);


// keypad functionality
document.addEventListener('keydown', e => {
    console.log(e);
    if (['1','2','3','4','5','6','7','8','9','0'].includes(e.key)) {
        e.preventDefault();
        document.querySelector('#btn' + e.key).click();
    } else if (e.key === '.') {
        e.preventDefault();
        document.querySelector('#dec').click();
    } else if (e.key === 'Enter' || e.key === '=') {
       document.querySelector('.enter').click();
    } else if (e.key === '+') {
        e.preventDefault();
        document.querySelector('.add').click();
    } else if (e.key == '-') {
        e.preventDefault();
        document.querySelector('.subtract').click();
    } else if (e.key === '*' || e.key === 'x') {
        e.preventDefault();
        document.querySelector('.multiply').click();
    } else if (e.key === '/') {
        e.preventDefault();
        document.querySelector('.divide').click();
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        document.querySelector('.clear').click();
    }
});



// to do:
// fix bug where user can add numbers after calculation is made
