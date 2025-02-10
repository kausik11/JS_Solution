// 1.	 Write a function that takes a string as input and returns the reverse of the string? without using reverse

// let str = "hello world";
// let b = [...str].entries();
// console.log(b);
// let finalstr = [];
// for (const [index,ele] of b) {
//     finalstr.unshift(index);
// }
// console.log(finalstr.join(''));

//using reduce
function reverseString(str) {
    return str.split('').reduce((acc, curr) => curr + acc, '');
}

let ans = reverseString("hello wolrd");
console.log(ans);