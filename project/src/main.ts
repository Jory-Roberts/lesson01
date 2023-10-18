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
