// 15.	Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68

const arr = [80,77,88,95,68];
let sumofmarks = arr.reduce((acc,curr)=>acc+curr,0);
let average = sumofmarks/arr.length;
console.log(average);

// 16.	The grades are computed as follows :
// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100A

// Compute the grade of each student using the average marks obtained in the previous question.
let grade = arr.map((ele,index,arr)=>ele<60?'Fail':ele<=70 ? "D" : ele<=80 ? 'C': ele<=90?"B" : "A");
console.log(grade);