// 6.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
let str = 'The quick brown fOx';

let newstr = str.toLowerCase().split('');
let vowel = 'aeiou';
let count = 0;
for (const ele of newstr) {
    vowel.includes(ele) ? count++ : count;
}
console.log(count);
