let firstNum = "";
let operator = "";
let secondNum = "";
let scope = true;
let index = 1;


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
        console.log("hi")
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
    index++;
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
            index = 1;
            resetNumbers();
            display("");
            scope = true;
        }
        else if (secondNum === "0" && operator === "÷") {
            display("roflcopter");
        }
        else if (isOperator(element.textContent) && firstNum.length >= 1) {
            if (isOperator(operator)) {
                displaySum(element);
            }
            else {
                operator = element.textContent;
                display("");
                index++;
            }
        }
        else if (element.textContent === "=" && secondNum.length >= 1) {
            displaySum(element);
        }
        else if (element.textContent !== "=" && !(isOperator(element.textContent))) {
            addToDisplay(element);
        }

        if (element.textContent === "=" && index === 4) {
            firstNum = "";
            scope = true;
            index = 1;
        }
    });
});




