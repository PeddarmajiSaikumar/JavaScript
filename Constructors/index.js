/* Constructor:
    A constructor in JavaScript is a special type of function used to create and initialize objects. 
    It is often used in conjunction with the new keyword to produce instances of an object.
*/ 

// Example-1
function Person(name,age){
    this.name=name;
    this.age=age;
}

let person=new Person("Saikumar",22);
console.log(person.name);
console.log(person.age);
