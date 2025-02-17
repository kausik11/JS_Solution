// 11.	Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not?

function check(num) {
    let sqareroot = Math.sqrt(num);
    if ( num ===1 || 0) {
      console.log("not a prime number");
      return;
    }else if(num===2){
      console.log("2 is a prime number");
      return;
    }
    for (let index = 2; index <= sqareroot; index++) {
       if (num%index == 0) {
          console.log("not a prime number");
          return;
       }
    }
     // If no divisors are found, it's a prime number
    console.log("prime number"); 
}

check(3);
