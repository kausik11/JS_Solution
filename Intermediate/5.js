// 4.	Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

let str = 'madam';
let newstr = ''
for (let i = str.length-1; i >= 0; i--) {
   newstr+=str[i];
}
if (str.toLowerCase() === newstr.toLowerCase()) {
    console.log('Palindrome string')
}else{
    console.log('Not a string')
}


//plaindrome number or not
// let num = 762537;


const check = (num)=>{
    if (num<0) return false;

    let originalnum = num;
    let reversenum = 0;
    while(num>0){
        let lastdigit = num%10;
        reversenum = reversenum*10+lastdigit;
        num = Math.floor(num/10);
    }
    return originalnum === reversenum;
}

let ans = check(1011);
ans === true ? console.log('palindrome number') : console.log('not a palindrome number')
