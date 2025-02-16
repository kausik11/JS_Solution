// 10.	  Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Class'
// Expected Output : 'Development'
let str = 'Web Development Class';
let newstr = str.split(" ");
let longestWord = newstr.reduce((acc, curr) => acc.length > curr.length ? acc : curr,
newstr[0]);
console.log(longestWord);