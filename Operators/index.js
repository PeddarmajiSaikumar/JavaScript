// Operators

/*1.Arithmetic Operators.*/
console.log("Aritmetic Operators");
let a=2;
let b=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

let count=1;
console.log(count++);//1
console.log(++count);//3
console.log(count--);//3
console.log(--count);//1


/*2.Assignment Operators. */
console.log("Assignment Operators.")
let x=3;
console.log(x+=3);
console.log(x-=3);
console.log(x*=3);
console.log(x/=3);
console.log(x%=3);

/*3.Comparison Operators. */
console.log("Comparison Operators.")
let num1=2;
let num2=4;
console.log(num1==num2);
console.log(num1!=num2);
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);

/*4.Logical Operators. */
console.log("Logical Operators.");
let age=18;
let hasVoterId=true;
if(age && hasVoterId){
    console.log("Eligible to Vote.");
}
if(age || hasVoterId){
    console.log("Atleast One condtion can be true.");
}
console.log(!hasVoterId);


/*5.Bitwise Operators.*/
console.log("Bitwise Operators.");
let p=1;
let q=2;
console.log(p & q);
console.log(p | q);
console.log(p ^ q);
console.log(~p);
console.log(~q);
console.log(p<<q);
console.log(p>>q);

/*6.Ternary Operator. */
console.log("Ternary Operator.");
let marks=88;
let grade=marks>90?"A"
         :marks>80?"B"
         :marks>70?"C"
         :marks>60?"D"
         :"E";
console.log(grade);