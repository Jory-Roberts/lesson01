//type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];
interface Guitarist {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
}

type UserId = stringOrNumber;

// Literal Types
let myName = 'Jory';

let userName: 'Jory' | 'Amber';
userName = 'Amber';

//Functions
const add = (a: number, b: number): Number => a + b;

const logMsg = (message: any): void => console.log(message);

logMsg('Hello');
logMsg(add(2, 3));
logMsg(add(2, 5));

let subtract = function (c: number, d: number): number {
  return c - d;
};

// type mathFunction = (a: number, b: number) => number;
// interfaces are classes / functions type aliases
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

// optional parameters
const addAll = (a: number, b: number, c?: number) => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 2) => a + b + c;

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));

//Rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

//Never type: endless loops / throw errors
const createError = (errorMsg: string) => {
  throw new Error(errorMsg);
};

const inifinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break; //without this, this is a never type
  }
};

const createNumberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (typeof value === 'number') return 'number';
  return createError('This should never happen');
};
