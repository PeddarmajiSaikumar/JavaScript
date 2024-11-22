// Functions

function greet(){
    console.log("Hello World!");
}
greet();   //Function Call

// Function return and passing

function greeting(user){
    return `Hello ${user}!`;
}
let user="Saikumar";
let str=greeting(user);
console.log(str);

// Function Expression

let add=function(num1,num2){
    return num1+num2;
}
let res=add(7,9);
console.log(res);

// Arrow Function
let sum=(n1,n2)=>{
    return n1+n2;
}
let result=sum(2,3);
console.log(result);