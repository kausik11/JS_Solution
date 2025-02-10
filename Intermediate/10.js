// write a function check the  datatype of that argument.
// check a number is prime of not


let count = 0;
let num = 29;

for (let i = 2; i < num/2; i++) {
    if (num%i === 0) {
        count++;
        break;
    }
}
if (count===0) {
    console.log("prime number")
}else{
    console.log("not prime");
}



// let arr=[23,20,22,20,23,18,16,18,20];

// // // output:-[23,20,22,18,16]


let newarr = arr.filter((ele,index)=>arr.lastIndexOf(ele)===index)

console.log(newarr);
