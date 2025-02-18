// 17.	Write a JavaScript program to find the Armstrong numbers of 3 digits
const num = 153;
let newnum = num.toString().split('');
let a = newnum.reduce((acc,curr)=>acc+Math.pow(curr, newnum.length),0);
console.log(a===num);