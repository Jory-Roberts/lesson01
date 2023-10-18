"use strict";
// Literal Types
let myName = 'Jory';
let userName;
userName = 'Amber';
//Functions
const add = (a, b) => a + b;
const logMsg = (message) => console.log(message);
logMsg('Hello');
logMsg(add(2, 3));
logMsg(add(2, 5));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => a + b + c;
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
//Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
//Never type: endless loops / throw errors
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const inifinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; //without this, this is a never type
    }
};
const createNumberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happen');
};
