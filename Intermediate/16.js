//4.	Write a JavaScript function that checks whether a passed string is a palindrome or not?

const str = "madam";
const str2 = "ama";

let a = str.split("").reverse().join("");
console.log(a === str);

//without using reverse keyword
function check(str) {
    let start = 0;
    let end = str.length - 1;
    while (end > start) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log("second string is",check(str2));

//another way
let str3 = "mom";

function ispalindrome(str) {
    const len = str.length;
const mid = Math.floor(len/2);

const leftHalf = str.slice(0,mid)
const rightHalf = (len%2===0) ? str.slice(mid) : str.slice(mid+1)
// console.log(leftHalf);
// console.log(rightHalf);
for (let i = 0; i < leftHalf.length; i++) {
   if (leftHalf[i] !== rightHalf[rightHalf.length-1-i]) {
    return false;
   }
    
}
return true;
}

let c = ispalindrome(str3);
console.log(c);