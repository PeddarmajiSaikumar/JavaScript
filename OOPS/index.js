/*  Classes and Objects:
                        * A class is a blueprint for creating objects.
                        * An object is an instance of a class, containing properties and methods.
*/ 

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log(`Hello,My name is ${this.name}`);
    }
}
let person=new Person("Saikumar",22);
console.log(person.name);
person.greet();



/*
    Encapsulation: * Encapsulation means restricting direct access to certain properties and methods of an object.
                   * Use # to create private fields (ES6 feature).
*/ 

class BankAccount{
    #balance;
    constructor(accountHolder,initialBalance){
        this.accountHolder=accountHolder;
        this.#balance=initialBalance;
    }
    deposit(amount){
        this.#balance+=amount;
        console.log(`Deposited amount Rs.${amount}`);
    }
    getBalance(){
        return this.#balance;
    }
}
let account=new BankAccount("Saikumar",1000);
account.deposit(200);
console.log(account.getBalance());

/* Inheritance:
        Inheritance allows a class (child class) to inherit properties and methods from another class (parent class).
*/

class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes sound`);
    }
}
class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks`);
    }
}
let dog= new Dog("Puppy");
dog.speak();

/*  Polymorphism:
        Polymorphism means the same method name or behavior can work differently for different objects.
*/

// Method Overriding
class _Animal{
    speak(){
        console.log("This Animal ");
    }
}
class _Dog extends _Animal{
    speak(){
        console.log("The dog Barks.");
    }
}
class _Cat extends _Animal{
    speak(){
        console.log("The cat says meow.");
    }
}
let animals=[new _Animal(),new _Dog(),new _Cat()];
for(let i=0;i<animals.length;i++){
    animals[i].speak();
}

/*  Abstraction:
       * Abstraction hides the complexity of implementation and only shows the relevant functionality.
       * In JavaScript, abstraction can be achieved using abstract base classes (simulated via parent classes) 
           and interfaces (using conventions).
*/

class Vehicle {
    constructor(make) {
        if (this.constructor === Vehicle) {
            throw new Error("Abstract class cannot be instantiated.");
        }
        this.make = make;
    }
    startEngine() {
        throw new Error("Method 'startEngine()' must be implemented.");
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log(`${this.make} car's engine started.`);
    }
}
let myCar = new Car("Toyota");
myCar.startEngine(); 