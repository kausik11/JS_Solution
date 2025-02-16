// 5.	Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

let str = 'webMaster';

function check(str) {
    let newstr = str.toLowerCase();
    let arr = newstr.split('');
     let ans = arr.sort();
     return ans.join("");
}

console.log(check(str));

