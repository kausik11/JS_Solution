// fibonaci 5 => 0,1,1,2,3
// fibonaci 8 => 0,1,1,2,3,5,

let num = 5;

let fibo = [0,1];
for (let i = 2; i < num; i++) {
    fibo.push(fibo[i-1]+fibo[i-2]);
    
}
console.log(fibo);

//using recursion