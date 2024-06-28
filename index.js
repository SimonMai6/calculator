let firstNum = "";
let operator = "";
let secondNum = "";

const button = document.querySelectorAll("button");
const displayContent = document.querySelector(".display");
const operatorArr = ["+", "-", "×", "÷"]


function add(numOne, numTwo){
    return numOne + numTwo;
}


function subtract(numOne, numTwo){
    return numOne - numTwo;
}


function multiply(numOne, numTwo){
    return numOne * numTwo;
}

function divide(numOne, numTwo){
    return numOne, numTwo;
}

function operate(numOne, numTwo, operate){
    if(operate === "×"){
        multiply(numOne, numTwo);
    }
}

function display(contents){
    displayContent.textContent = contents;

}

function clearDisplay(){
    firstNum = "";
    operator = "";
    secondNum = "";
    display("");
}

function isOperator(operator){
    if(operatorArr.includes(operator)){
        return true;
    }
    else{
        return false;
    }
}


button.forEach(element => {
    element.addEventListener(("click"), () =>{
        if(element.textContent === "AC"){
                clearDisplay();
        }
        else if(isOperator(element.textContent)){
            operator = element.textContent;
            display("");
        }
        if(firstNum.length < 15){
            

            if(isOperator(operator)){
                secondNum += element.textContent;
                console.log(element.textContent);
                display(secondNum);
            }

            else{
                firstNum += element.textContent;
                console.log(firstNum.length <= 15);
                display(firstNum);
            }
        }
        
        else{

        }


    })
});




