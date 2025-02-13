const func = (arr,funcc)=>{
  return funcc(arr);
}

const afunc = (arr)=>{
   let a = arr.map((ele)=>ele);
   return a;
}

let a = func([2,5,6,8],afunc);
console.log(a);