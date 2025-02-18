// 22.	Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"

const arr= [[1, 2, 1, 24,66,77], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < arr.length; i++) {
    console.log(`row ${i}`);
   for (let index = 0; index < arr[i].length ; index++) {
       console.log(`data is ${arr[i][index]}`)
   }   
}
