"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; //less specific type
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem here, but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
//Double casting, avoid whenver possible overrules TS
// 10 as string;
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
