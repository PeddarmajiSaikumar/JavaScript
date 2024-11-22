/*  Type Conversion : Type conversion (also called explicit conversion) 
    is when you manually convert a value from one type to another 
    using functions or methods
*/

//  1.Number to String
let num = 123;
let str = String(num);
console.log(str);
console.log(typeof str);

//  2.String to Number
let str1 = "456";
let num1 = Number(str1);
console.log(num1);
console.log(typeof num1);


//  3.Boolean to String
let isValid = true;
let str2 = String(isValid);
console.log(str2);
console.log(typeof str2);

/*  Type Coercion: Type coercion (also called implicit conversion) 
    happens automatically when JavaScript attempts to perform an 
    operation between values of different types, converting 
    one value to a compatible type
*/

// 1.String concatenation
let number=10;
let string="20";
let result=number+string;
console.log(result,typeof result);

// 2.Arithmetic Operations
let _number=3;
let _string="6";
let _result=_number*_string;
console.log(_result,typeof _result);