// 6.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

let str = 'The quick brown fox';
let vowel = "aeiouAEIOU"
let count = 0;

let newstr = str.toLowerCase().split("");
for (const ele of newstr) {
   vowel.includes(ele) ? count++: "";
}

console.log(`Total ${count} vouwel is in the string`);




//using regex
function check(param) {
    const regex = /[aeiouAEIOU]/g;
    let result = param.match(regex);
    return result;
}

let ans = check(str);
console.log(ans.length());