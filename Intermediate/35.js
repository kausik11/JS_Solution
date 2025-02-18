// 23.	Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// Reasoned for a few seconds
// The user's asking to remove duplicates from an array, while ignoring case sensitivity. The case-insensitivity part is clear for strings – "Hello" and "hello" should count as the same. But how about numbers? I'll assume case-sensitivity doesn't apply to them. The plan: I'll use array.filter combined with indexOf, ensuring string comparisons are done with lowercase versions. Alternatively, I could use a Set but with lowercase conversion for strings. Essentially: for strings, we convert to lowercase and use a Set for detection.

// Here's one way to remove duplicate items from an array while ignoring case sensitivity for strings:


// function removeDuplicatesIgnoreCase(arr) {
//   const seen = new Set();

//   return arr.filter(item => {
//     // For strings, use a lower-case version as the key
//     const key = typeof item === 'string' ? item.toLowerCase() : item;
    
//     if (seen.has(key)) {
//       // Already encountered, so skip this item.
//       return false;
//     } else {
//       // Add the key to the set and keep the item.
//       seen.add(key);
//       return true;
//     }
//   });
// }

// // Example usage:
// const mixedArray = ["Hello", "hello", "World", "world", "Test", "TEST", 1, 1, "1"];
// const uniqueArray = removeDuplicatesIgnoreCase(mixedArray);
// console.log(uniqueArray);
// // Output might be: [ 'Hello', 'World', 'Test', 1, '1' ]
// Explanation:
// Using a Set:
// We create a Set named seen to keep track of items we've encountered.

// Filtering the Array:
// We use the filter() method to iterate through the array. For each item:

// If it's a string, we convert it to lower case to treat "Hello" and "hello" as duplicates.
// For non-string values, we use the item itself as the key.
// If the key is already in seen, the item is skipped (i.e., not included in the filtered array).
// Otherwise, the key is added to seen, and the item is kept.
// Result:
// The function returns a new array with duplicate items removed, while ignoring case differences for strings.

// Feel free to test the code with different arrays to see how it handles various types of elements.