// 12.	Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function secondLowestAndGreatest(arr) {
    // First, we sort the array in ascending order
    let sortedArr = [...new Set(arr)].sort((a, b) => a - b); // Use Set to remove duplicates

    // Check if the array has at least two elements after removing duplicates
    if (sortedArr.length < 2) {
        return 'Array needs at least two unique numbers';
    }

    // Return the second lowest and second greatest
    let secondLowest = sortedArr[1]; // Second element
    let secondGreatest = sortedArr[sortedArr.length - 2]; // Second last element

    return `${secondLowest}, ${secondGreatest}`;
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
console.log(secondLowestAndGreatest(arr)); // Output: 2, 4

