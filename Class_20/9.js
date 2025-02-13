const obj = {name:"jhon",age:30};

function addgreet(obj) {
    obj.greet = function(){
    console.log(`hello my name is ${this.name}`)
    }
};

addgreet(obj);
obj.greet();
