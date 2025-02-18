// 14.	Write a JavaScript conditional statement to find the largest of five numbers.

let a = 10;
let b = 20;
let c = 5;
let d = 30;
let e = 15;

let arr = new Array(a,b,c,d,e);
let largest = arr.reduce((acc,curr)=>curr>acc?acc=curr:acc,0);
console.log(largest);