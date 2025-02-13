class Person {
    constructor(fname,lname,age) {
        this.firstname = fname;
        this.lastname = lname;
        this.age = age;
    }
        fullname = function(){
            return `hello ${this.firstname} ${this.lastname}`
        }
}

let newPerson = new Person("kausik","saha",25);
let ans = newPerson.fullname();
console.log(ans);

