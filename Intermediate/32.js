// 20.	Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


function mostfrequent(arr) {
   let a = arr.reduce((acc,ele)=>{
        acc[ele] = (acc[ele] || 0) + 1;
        return acc;
    },{})
    return a;
}

let ansobj = mostfrequent(arr1);


let maxcount = 0;
function check(obj) {
for (const key in obj) {
    obj[key] > maxcount ? maxcount = obj[key] : maxcount
}
return maxcount;
}

console.log(check(ansobj));

