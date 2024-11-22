/*
    Array:
        An array is a special variable that can hold multiple values in a single variable.
        Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.
*/

// Declaration of Arrays
// 1.Using Array literal
let fruits=['apple','banana','guava','mango','pineapple'];

// 2.Using new Keyword
let numbers=new Array(1,2,3,4,5,6,7,8,9);


// Accessing Array Elements
console.log(fruits[0]);
console.log(numbers[2]);


// Common Array Methods
// 1.push():Adds elements to the end
fruits.push('grapes');
console.log(fruits);

// 2.unshift:Adds elements to the beginning
numbers.unshift(0);
console.log(numbers);

// 3.pop():Removes the last elements from the array
fruits.pop();
console.log(fruits);

// 4.shift():Remove the first element from the array
numbers.shift();
console.log(numbers);

// 5.indexOf():Return the index value of the element for the first occurence
console.log(fruits.indexOf('mango'));

// 6.includes:Checks whether the element exist or not and returns the boolean value
console.log(numbers.includes(3));

// 7.splice:Adds/Removes the elements
fruits.splice(3,3,'watermelon');
console.log(fruits);

// 8.Slice:Returns the portion of an array
let x=numbers.slice(2,6);
console.log(x);

// 9.join:Joins the elements into a string
console.log(numbers.join(','));

// 10.filter:Filters element based on acondition
let even = numbers.filter(num => num % 2 === 0);
console.log(even); 

// 11.map:Transforms each element and returns a new array.
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// 12.length
console.log(numbers.length);
console.log(fruits.length);

// Finding the Largest number in an Array
let nums=[2,31,12,2,1];
let max=Math.max(...nums);
console.log(max);

// Finding the smallest element in an Array
let _nums=[2,31,12,1];
let min=Math.min(..._nums);
console.log(min);