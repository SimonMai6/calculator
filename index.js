let firstNum = "";
let operator = "";
let secondNum = "";

const button = document.querySelectorAll("button");
const displayContent = document.querySelector(".display");
const operatorArr = ["+", "-", "×", "÷"];


function add (numOne, numTwo) {
    return Number(numOne) + Number(numTwo);
}


function subtract (numOne, numTwo) {
    return numOne - numTwo;
}


function multiply (numOne, numTwo) {
    return numOne * numTwo;
}

function divide (numOne, numTwo) {
    return numOne/numTwo;
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

function clearDisplay () {
    firstNum = "";
    operator = "";
    secondNum = "";
    display("");
}

function isOperator (operator) {
    return operatorArr.includes(operator);
}

function isWithinLimit (wordLength) {
    return wordLength < 15;
}


function addToDisplay (element) {
    if (!isOperator(operator)) {
        if (isWithinLimit(firstNum.length)) {
            firstNum += element.textContent;
            console.log(element.textContent);
            display(firstNum);
        }
    }
    else {
        if (isWithinLimit(secondNum.length)) {
            secondNum += element.textContent;
            console.log(element.textContent);
            display(secondNum);
        }
    }
}

button.forEach( (element) => {
    element.addEventListener( ("click"), () =>{
        if (element.textContent === "AC") {
            clearDisplay();
        }
        else if (isOperator(element.textContent)) {
            operator = element.textContent;
            display("");
        }
        else if (element.textContent === "=") {
            let sum = operate(firstNum, secondNum, operator);
            clearDisplay();
            display(sum);
        }
        else {
            addToDisplay(element);
        }
        

    });
});




