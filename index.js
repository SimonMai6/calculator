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
    
    if (!isOperator(operator)) {
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

button.forEach( (element) => {
    element.addEventListener( ("click"), () =>{
        if (element.textContent === "AC") {
            resetNumbers();
            display("");
        }
        else if (isOperator(element.textContent) && firstNum.length >= 1) {
            console.log(firstNum.length)
            if (isOperator(operator)) {
                let sum = isWithinLimit(operate(firstNum, secondNum, operator).toString().length) ? 
                operate(firstNum, secondNum, operator).toString().slice(0,15) : 
                operate(firstNum, secondNum, operator).toExponential(1);
                resetNumbers();
                firstNum = sum;
                display(sum);
            }
            else {
                operator = element.textContent;
                console.log("hi")
                display("");
            }
        }
        else if (element.textContent === "=" && secondNum.length >= 1) {
            if (secondNum === "0") {
                display("roflcopter")
            }
            else {
                let sum = isWithinLimit(operate(firstNum, secondNum, operator).toString().length) ? 
                operate(firstNum, secondNum, operator).toString().slice(0,15) : 
                operate(firstNum, secondNum, operator).toExponential(1);
                resetNumbers();
                firstNum = sum;
                display(sum);
            }

        }
        else {
            if (element.textContent !== "=" && !(isOperator(element.textContent))) {
                addToDisplay(element);
            }
            
        }
    });
});




