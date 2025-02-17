// 17 Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".Sample Output:
// 1
// 2
// 3 Fizz
// 4
// 5 Buzz
// 6 Fizz
// 7
// 8
// 9 Fizz
// 10 Buzz


    for (let i = 1; i <= 15; i++) {
        if (i%3 === 0 && i%5 ===0) {
            console.log("fizzbuzz")
        }else if(i%3 === 0){
            console.log("fizz")
        }else if(i%5 === 0){
            console.log("buzz")
        }else{
            console.log(i);
        }
        
    }

//fizzbazz