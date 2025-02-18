// 21.	Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

let str = 'The Quick Brown Fox';

function toggle(str) {
    let arr = str.split(' ');
    let toggleword = '';
    for (const ele of arr) {
        for (let i = 0; i < ele.length; i++) {
           toggleword+= ele[i] === ele[i].toUpperCase()?ele[i].toLowerCase():ele[i].toUpperCase();
        }
    }
    return toggleword;
}

console.log(toggle(str));