// 11.	Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not?

function check(num) {
    let sqareroot = Math.sqrt(num);
    if ( num ===1 || 0) {
      console.log("not a prime number");
      return;
    }
    for (let index = 2; index <= sqareroot; index++) {
       if (num%index == 0) {
          console.log("not a prime number");
          return;
       }
       console.log("prime number")
       return;
    }
    
}

check(2);
// 12.	How to check if a number is a power of 2?
// 13.	How to check if a number is a power of 3?