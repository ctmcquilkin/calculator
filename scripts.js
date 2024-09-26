//
let n1 = 0;
let n2 = 0;
let operator = '';

const add = function (n1, n2) {
    if (n1 === undefined || n2 === undefined) {
        return 0;
    } else {
        return parseInt(n1 + n2);
    }
};

const subtract = function (n1, n2) {
    if (n1 === undefined || n2 === undefined) {
        return 0;
    } else {
        return parseInt(n1 - n2);
    }
};

const multiply = function (n1, n2) {
    if (n1 === undefined || n2 === undefined) {
        return 0;
    } else {
        return parseInt(n1 * n2);
    }
};

const divide = function (n1, n2) {
    if (n1 === undefined || n2 === undefined) {
        return 0;
    } else {
        return parseInt(n1 / n2);
    }
};