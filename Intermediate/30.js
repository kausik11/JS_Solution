// 18.	Write a JavaScript function to check whether an `input` is an array or not.

function check(param) {
    return Array.isArray(param) ? "is an array" : "not an array";
};

console.log(check([3,5])); 