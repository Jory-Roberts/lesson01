//basic types

let myName: string = 'Amber';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = 'Madi';
meaningOfLife = 24;
isLoading = true;
album = 5150;

const sum = (a: number, b: number) => a + b;

console.log(sum(5, 2));

//union types can be more than 2 data types
let postId: string | number;
let isActive: number | boolean | string;

//regex -- TS will infer
let re: RegExp = /\w+/g;
