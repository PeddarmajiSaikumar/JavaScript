/*  Super:
        The super keyword in JavaScript is used in class inheritance to call methods or constructors of 
        the parent class. It plays a key role in accessing parent class functionality within a subclass.
*/

// Calling the Parent class Constructor

class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes sound.`);
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    displayInfo(){
        console.log(`${this.name} is a ${this.breed}`);
    }
}
let dog=new Dog("Buddy","Golden Retriver");
dog.speak();
dog.displayInfo();




// Calling a Parent class Method
class _Animal{
    speak(){
        console.log("This animal makes sound.");
    }
}
class Cat extends _Animal{
    speak(){
        super.speak();
        console.log("The cat says meow.");
    }
}
const cat=new Cat();
cat.speak();