//Write a function that takes a string as input and returns the reverse of the string?
function check(str) {
    let arr = str.split('');
    return arr.reverse().join()
}

let ans = check("hello");
console.log(ans);