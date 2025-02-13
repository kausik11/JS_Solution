const func = (arr)=>{
  let a = arr.map((ele)=>ele*2);
  return a;
}

let ans = func([2,4,6,8,5]);
console.log(ans);