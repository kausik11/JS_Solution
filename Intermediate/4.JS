// 3.	Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

function reverseNumber(x) {
    return parseInt(x.toString().split('').reverse().join(''));
    }

    let ans = reverseNumber(322345);
    console.log(ans);
// let num = 3234;
// let num2 = num.toString();//convert to string
// let num3 = parseInt(num2)//revert back to number
// console.log(typeof(num2));
// console.log(typeof(num3));

// let num =4877;
// let a  = num.split('');
// console.log(a);  //the number has not any split method, so we have to convert it into string to split it.

