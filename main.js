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
})


function handleNumber(num){
    if(currentValue.length <= 5){
        currentValue += num;
    }
}