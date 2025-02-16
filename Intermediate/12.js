// factorial of n
// 5! = 1*2*3*4*5

//This method is clean and follows the mathematical definition of factorial, but it can cause stack overflow for large n due to deep recursion.
function fac(num) {
    if (num===0||num===1) {
        return 1;
    }else{
        return num*fac(num-1)
    }
}

console.log(fac(5));

//This approach avoids recursion and is more efficient in terms of memory.

function newfac(num) {
    let res = 1;
    for (let i = 2; i <= num; i++) {
        res *= i;
    }
    return res;
}

console.log(newfac(5));

//using reduce 
const fact = (num)=> num === 0 ? 1 : [...Array(num).keys()].map(i=>i+1).reduce((acc,ele)=>acc*ele,1);

console.log(fact(5));