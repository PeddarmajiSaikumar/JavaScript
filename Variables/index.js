//VARIABLES
/* 1)let-variable */
let age=22;
age=23;
console.log(age);   //output=23

/* 2)let-variable */
const maxSpeed=120;
// maxSpeed=145;
console.log(maxSpeed);  //Error bcz a const variables is fixed and cannot be changed once declared like final keyword in Java.

/* 3)var-variable */
var name="Saikumar";
name="Peddarmaji";
console.log(name);  //Output=Peddarmaji    Can be used but before it is declared and older version of declaring varibles and can cause bugs.



/* Types of Vriables */

/* 1)Local Variable:
        Local variable is the varible which is used declared inside the function and can be accessed only in that particular funation.*/
function abc(){
    let firstName="Saikumar";
    console.log(firstName);
}
abc();


/*  2)Global Variable:
        Global Variable is the variables which is declared outside the function and can be accessible anywhere from the function. */
let lastName="John";
function xyz(){
    console.log(lastName);
}
function pqr(){
    console.log(lastName);
}
xyz();
pqr();