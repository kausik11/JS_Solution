// let data = [[a,b,c],[a,c,d],[e,a,f]];  output: {a:3,b:1,c:2} in js

let data = [['a', 'b', 'c'], ['a', 'c', 'd'], ['e', 'a', 'f'],['a','b',['k','m','g']]];

let frequency = data.flat(2).reduce((acc,ele)=>{
    // acc[ele] = (acc[ele]||0)+1;
    acc[ele] = (acc[ele]||0)+1;
    return acc;
},{});

console.log(frequency);