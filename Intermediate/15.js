// 3.	Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

const num = 22314;


function reversenum(num) {
    let ans = "";
    while(num!=0){
        let a = num%10;
        ans+=a;
        num = Math.floor(num/10);
    }
  return ans;
 
}

let b = reversenum(num);
console.log(b);

//another approach
let num2 = 9493485948;

const newfunc = (num)=>{
   let reversestr = num.toString().split("").reverse().join("");
   return parseInt(reversestr);
}

let c = newfunc(num2);
console.log(c);