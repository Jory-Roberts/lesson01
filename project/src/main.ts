let stringArr = ['one', 'hey', 'Amber'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'Madi';
stringArr.push('welcome');

guitars[0] = 1984;
guitars.unshift('Julie');

let test = [];
let bands: string[] = [];
bands.push('Van Halen');

//Tuple
let myTuple: [string, number, boolean] = ['Amber', 34, true];

let mixed = ['John', 1, false];

//Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);

myObj = bands;

const exammpleObj = {
  prop1: 'Jory',
  prop2: true,
};

//Types
//Interfaces similar structure, interfaces used more with classes
interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812'],
};

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'IV'],
};

evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return 'Hello!';
};

console.log(greetGuitarist(jp));

//Enums
//Not a type-level addition to JS

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
