// 7.	Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function check(para) {
    return typeof(para)
}

let a = check(()=>{});
console.log(a);