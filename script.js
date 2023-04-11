let result = document.getElementById('result');

// function addInput(input) {
//     result.textContent += input;
// }

function addInput(input) {
    switch (input) {
        case '+':
        case '-':
        case '*':
        case '/':
            result.textContent += ' ' + input + ' ';
            break;
        default:
            result.textContent += input;
            break;
    }
}


function clearResult() {
    result.textContent = '';
}

function deleteLastChar() {
    result.textContent = result.textContent.slice(0, -1);
}

function calculate() {
    let expression = result.textContent;
    let answer = eval(expression);
    result.textContent = answer;
}