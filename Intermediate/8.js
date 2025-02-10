// 7.	Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const check = (value)=>{
    return typeof(value);
}

let ans = check();
console.log(ans);