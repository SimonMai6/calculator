let firstNum = "";
let operator = "";
let secondNum = "";

const button = document.querySelectorAll("button");
const displayContent = document.querySelector(".display");



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
        multiply(numOne, numTwo)
    }
}

function display(){
    displayContent.textContent = firstNum;

}
button.forEach(element => {
    element.addEventListener(("click"), () =>{
        firstNum += element.textContent;
        console.log(firstNum);
        display();
        
    })
});
// console.log(button)
// button.addEventListener("click", () => {
//     console.log("hi")
// });




