// without concat 
// let arr=[1,2,3,4];
// let arr1=[5,6,7,8];
// let newarr=[1,2,3,4,5,6,7,8]

let arr = [5,4,5,62,2]
let arr1=[5,6,7,8];

let newarr = [...arr, ...arr1];
console.log(newarr);

//remove the duplicates
let a = newarr.filter((ele,index,arr)=>arr.indexOf(ele)===index);
console.log(a);

//remove duplicates
let b = [...new Set(newarr)];
console.log(b);