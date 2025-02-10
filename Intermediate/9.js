// 8.	Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4


//wrong
// const check = ()=>{
//     let arr = [1,2,3,4,5];
//     let secondLowest = arr.slice(1).sort((a,b)=>a-b)[0]
//     let secondGreatest = arr.slice(-1).sort((a,b)=>b-a)[0]
//     console.log(secondLowest,secondGreatest);
// }

const check = () => {
    let arr = [1, 2, 30, 4, 5];

   let a =  arr.sort((a, b) => a - b); // Ensure sorted order
//    arr.sort() → Sorts the array in place (modifies arr itself).
// (a, b) => a - b → This is the compare function:
// If a - b < 0 → a comes before b.
// If a - b > 0 → b comes before a.
// If a - b == 0 → Order remains unchanged.
   console.log(a);
    let secondLowest = arr[1];  // Second lowest
    let secondGreatest = arr[arr.length - 2]; // Second greatest

    console.log(secondLowest, secondGreatest);
};

check(); // Output: 2, 4