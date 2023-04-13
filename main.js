let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function() {
    //store all html componets in js
    let clear = document.querySelector('#clear-btn');
    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    //check which number is clicked
    numbers.forEach((number) => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    //display a clicked operator on to the screen
    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    //remove all text from the screen when C is clicked
    clear.addEventListener('click', function(){
        previousValue = "";
        currentValue = "";
        operator = "";
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener('click', function(){
        calculate()
    })
})


function handleNumber(num){
    if(currentValue.length <= 5){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

//calculator logic
function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "x"){
        previousValue *= currentValue;
    } else if(operator === "/"){
        previousValue /= currentValue;
    }
    console.log(previousValue);
}