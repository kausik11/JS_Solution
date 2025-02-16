// 8.	Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

let arr =  [10,22,20,3,4,5,77,55];

let sortarr = arr.sort();
let secndlargest = sortarr.slice(sortarr.length-2,sortarr.length-1);
let secndsmallest = sortarr.slice(1,2);
console.log(secndlargest[0]);
console.log(secndsmallest[0]);


//remove the duplicates from the array and return a new array
let arr2 = [1, 2, 2, 3, 4, 4];
let uniquearray = [];
for (const ele of arr2) {
    if (uniquearray.includes(ele)) {
        continue;
    }else{
        uniquearray.push(ele);
    }
}
console.log(uniquearray);



//count the duplicates from the array
let arr3 = [1, 2, 2, 3, 4, 4];
const count = {};
for (const ele of arr3) {
    if (count[ele]) {
        count[ele]++;
    }else{
      count[ele] = 1;
    }
}
console.log("the final occourance count is",count); //{ '1': 1, '2': 2, '3': 1, '4': 2 }

// console.log(Object.entries(count)); //[ [ '1', 1 ], [ '2', 2 ], [ '3', 1 ], [ '4', 2 ] ]
const obj = {};
for (const key in count) {
   count[key]>1 ? obj[key] = count[key] : "";
}

console.log("the duplicate elements are",obj);