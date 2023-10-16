"use strict";
let stringArr = ['one', 'hey', 'Amber'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Madi';
stringArr.push('welcome');
guitars[0] = 1984;
guitars.unshift('Julie');
let test = [];
let bands = [];
bands.push('Van Halen');
//Tuple
let myTuple = ['Amber', 34, true];
let mixed = ['John', 1, false];
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
const exammpleObj = {
    prop1: 'Jory',
    prop2: true,
};
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV'],
};
evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
//Enums
//Not a type-level addition to JS
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
