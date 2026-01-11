let current = '0';
let previous = '';
let operator = null;

const resDisplay = document.getElementById('result');
const prevDisplay = document.getElementById('prev-action');

function update() {
    resDisplay.innerText = current;
    prevDisplay.innerText = previous + (operator || '');
}

function num(val) {
    if (val === '.' && current.includes('.')) return;
    if (current === '0' && val !== '.') current = val;
    else current += val;
    update();
}

function setOp(op) {
    if (current === '') return;
    if (previous !== '') calc();
    operator = op;
    previous = current;
    current = '';
    update();
}

function calc() {
    let result;
    const p = parseFloat(previous);
    const c = parseFloat(current);
    if (isNaN(p) || isNaN(c)) return;

    switch (operator) {
        case '+': result = p + c; break;
        case '-': result = p - c; break;
        case '*': result = p * c; break;
        case '/': result = p / c; break;
        default: return;
    }
    current = result.toString();
    operator = null;
    previous = '';
    update();
}

function allClear() { current = '0'; previous = ''; operator = null; update(); }
function del() { current = current.slice(0, -1) || '0'; update(); }