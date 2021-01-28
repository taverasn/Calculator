/*----- constants -----*/
// Model
const OPERATORS = ['-', '/', '*', '+'];

/*----- app's state (variables) -----*/
let calculator;
let userInput = [];
let userInputString = '';

/*----- cached element references -----*/
const $calculatorEl = $('#calculator');
const $calcBtnEls = $('.calcBtn');
const $input = $('#input');
const $resultEl = $('#result');
const $clearEl = $('#reset');

/*----- event listeners -----*/
$calcBtnEls.on('click', handleInput);
$resultEl.on('click', handleResult);
$clearEl.on('click', render);

/*----- functions -----*/
function handleInput(event) {
    userInput.push(event.target.dataset.index);
    if (OPERATORS.includes(userInput[userInput.length-1]) && (OPERATORS.includes(userInput[userInput.length-2]))) {
        userInput.pop();
        return;
    } else console.log(false);
    userInputString = userInput.join('');
    $($input).attr('value', userInputString);
}

function handleResult() {
    let result = $($input).attr('value', eval(userInputString));
    userInput=[];
    userInput.push(eval(userInputString));
}

function render() {
    $($input).attr('value', '');
    userInput = [];
    userInputString = '';
}