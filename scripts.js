//
let n1 = 0;
let n2 = 0;
let operator = '';

const operate = function (operator, n1, n2) {
    if (n1 === undefined || n2 === undefined) {
        return 0;
    };
    switch(operator) {
        case add:
            add(n1, n2);
            break;
        case subtract:
            subtract(n1, n2);
            break
        case multiply:
            multiply(n1, n2);
            break
        case divide:
            divide(n1, n2);
            break
        divide:
            console.log('you forgot the operator');
    }
};

const add = function (n1, n2) {
    return parseInt(n1 + n2);
};

const subtract = function (n1, n2) {
    return parseInt(n1 - n2);
};

const multiply = function (n1, n2) {
    return parseInt(n1 * n2);
};

const divide = function (n1, n2) {
    return parseInt(n1 / n2);
};