const arr = [10,20,5,30];


let ans = arr.reduce((acc,ele)=>ele>acc?ele:acc)

console.log(ans);