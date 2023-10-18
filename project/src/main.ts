type One = string;
type Two = string | number;
type Three = 'hello';

//convert to more or less specific
let a: One = 'hello';
let b = a as Two; //less specific type
let c = a as Three; // more specific

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string;

// Be careful! TS sees no problem here, but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

//Double casting, avoid whenver possible overrules TS
// 10 as string;
10 as unknown as string;

// The DOM
const img = document.querySelector('img') as HTMLImageElement;
const myImg = document.getElementById('#img')! as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#img');

img.src;
myImg.src;