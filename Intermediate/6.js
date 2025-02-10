// 5.	Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// const check = ()=>{
//     let str = 'webmaster';
//     let res = '';
//     for(let i=0;i<str.length;i++){
//         let char = str[i];
//         if(res.indexOf(char) === -1){
//             res += char;
//             }
//             }
//             return res;
// }
// let ans = check();
// console.log(ans);

let str = 'webmaster';
let res = str.split("");
let ans = res.sort();
console.log(ans.join(''));

//another way
function sortString(str) {
    let arr = str.split("");
    for (let i = 0; i < arr.length-1; i++) {
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j]< arr[minIndex]) {
                minIndex = j;//find the smallest character
            }
            
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]] //swap the element
    }
    return arr.join("");
}

console.log(sortString("webmaster")); // Output: "abeemrstw"