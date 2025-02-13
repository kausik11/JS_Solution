class Car {
    constructor(model,year) {
        this.model = model;
        this.year = year;
      
    }
        getDetails = function(){
            return `The car name is ${this.model} of ${this.year} model`
        }
}

let newPerson = new Car("Toyota",2019);
let ans = newPerson.getDetails();
console.log(ans);

//want to clearify