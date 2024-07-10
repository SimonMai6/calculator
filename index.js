let firstNum = "";
let operator = "";
let secondNum = "";
let equation = "";
let scope = true;


const button = document.querySelectorAll("button");
const displayContent = document.querySelector(".display");
const operatorArr = ["+", "-", "×", "÷", "*", "/"];


function add (numOne, numTwo) {
    return Number(numOne) + Number(numTwo);
}


function subtract (numOne, numTwo) {
    return Number(numOne) - Number(numTwo);
}


function multiply (numOne, numTwo) {
    return Number(numOne) * Number(numTwo);
}

function divide (numOne, numTwo) {
    return Number(numOne) / Number(numTwo);
}

function operate (numOne, numTwo, operate) {
    switch (operate) {
        case "+":
            return add(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
        case "×":
            return multiply(numOne, numTwo);
        case "*":
            return multiply(numOne, numTwo);
        case "÷":
            return divide(numOne, numTwo);
        case "/":
            return divide(numOne, numTwo);
        default:
            return "ERROR";
    }

}

function display (contents) {
    displayContent.textContent = contents;

}

function resetNumbers () {
    firstNum = "";
    operator = "";
    secondNum = "";
}

function isOperator (operator) {
    return operatorArr.includes(operator);
}

function isWithinLimit (numLength) {
    return numLength < 15;
}


function addToDisplay (element) {
    if ((firstNum === "0" && element === "0") || 
    (secondNum === "0" && element === "0")) {
        
    }
    else if (!isOperator(operator) && isSecondNum()) {
        if (isWithinLimit(firstNum.length)) {
            firstNum += element;
            display(firstNum);
        }
    }
    else {
        if (isWithinLimit(secondNum.length)) {
            secondNum += element;
            display(secondNum);
        }
    }
}


function isSecondNum(){
    return scope;
}

function displaySum(element) {
    let sum = isWithinLimit(operate(firstNum, secondNum, operator).toString().length) ? 
    operate(firstNum, secondNum, operator).toString().slice(0,15) : 
    operate(firstNum, secondNum, operator).toExponential(1);
    resetNumbers();
    firstNum = sum;
    display(sum);
    operator = element;
    scope = false;
}

function calculate(element) {
    if ((element === "⌫" || element === "Backspace")
        && !isOperator(operator) && element === "Backspace") {
        if (!isOperator(operator)) {
            firstNum = firstNum.slice(0,firstNum.length-1);
            display(firstNum);
        }
        else {
            secondNum = secondNum.slice(0, secondNum.length-1);
            display(secondNum);
        }
    }
    if (element === "AC") {
        resetNumbers();
        display("");
        scope = true;
        equation = "";
    }
    else if (secondNum === "0" && (operator === "÷" || operator === "/")) {
        display("roflcopter");
        resetNumbers();
    }
    else if (isOperator(element) && firstNum.length >= 1) {
        if (isOperator(operator)) {
            displaySum(element);
            equation = "";
        }
        else {
            operator = element;
            display("");
            equation += element;
        }
    }
    else if ((element === "=" || element === "Enter") && secondNum.length >= 1) {
        displaySum(element);
        equation = "";
    }
    else if ((element !== "=" || element !== "Enter") && !(isOperator(element))) {
        if (displayContent.textContent.includes(".") && element === ".") {

        }
        else if (element === "⌫" || element === "Backspace") {

        }
        else {
            addToDisplay(element);
            equation += element;
        }
    }
    // did not account for the position of a negative number fix
    if (!isSecondNum() && Number.isInteger(Number(equation.charAt(0))) && isOperator(equation.charAt(1))) {
        firstNum = secondNum;
        secondNum = "";
        scope = true;
    }
};


button.forEach( (element) => {
    element.addEventListener( ("click"), () => {
        calculate(element.textContent);
    });
});

document.addEventListener( ("keydown"), (event) => {
    if ((Number.isInteger(Number(event.key)) && event.key !== " ") 
        || isOperator(event.key) || event.key === "=" 
        || event.key === "Backspace" || event.key === "."
        || event.key === "Enter") {
        calculate(event.key);
    }
});