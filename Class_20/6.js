const arr = [5,6,8,9,23,14,55];

let ans = arr.reduce((acc,currele,index,arr)=>acc+currele,0);
console.log(ans);