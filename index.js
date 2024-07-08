let firstNum = "";
let operator = "";
let secondNum = "";
let equation = "";
let scope = true;


const button = document.querySelectorAll("button");
const displayContent = document.querySelector(".display");
const operatorArr = ["+", "-", "×", "÷"];


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
        case "÷":
            return divide(numOne, numTwo);

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
    if ((firstNum === "0" && element.textContent === "0") || 
    (secondNum === "0" && element.textContent === "0")) {
        
    }
    else if (!isOperator(operator) && isSecondNum()) {
        if (isWithinLimit(firstNum.length)) {
            firstNum += element.textContent;
            display(firstNum);
        }
    }
    else {
        if (isWithinLimit(secondNum.length)) {
            secondNum += element.textContent;
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
    operator = element.textContent;
    scope = false;
}


button.forEach( (element) => {
    element.addEventListener( ("click"), () =>{
        
        if (element.textContent === "AC") {
            resetNumbers();
            display("");
            scope = true;
            equation = "";
        }
        else if (secondNum === "0" && operator === "÷") {
            display("roflcopter");
        }
        else if (isOperator(element.textContent) && firstNum.length >= 1) {
            if (isOperator(operator)) {
                displaySum(element);
                equation = "";
            }
            else {
                operator = element.textContent;
                display("");
                equation += element.textContent;
            }
        }
        else if (element.textContent === "=" && secondNum.length >= 1) {
            displaySum(element);
            equation = "";
        }
        else if (element.textContent !== "=" && !(isOperator(element.textContent))) {
            if (displayContent.textContent.includes(".") && element.textContent === ".") {

            }
            else{
                addToDisplay(element);
                equation += element.textContent;
            }
        }
        console.log(equation);
        if (!isSecondNum() && Number.isInteger(Number(equation.charAt(0))) && isOperator(equation.charAt(1))) {
            firstNum = secondNum;
            secondNum = "";
            scope = true;
        }
    });
});