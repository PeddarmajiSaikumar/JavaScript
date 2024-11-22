//for Loop
for(let i=0;i<=5;i++){
    console.log(i);
}

// While Loop
let count =1;
while(count<=5){
    console.log(count++);
}

//do while Loop
let i=0;
do{
    console.log(i);
    i++;
}while(i<=5);

// For in Loop
let person = {
    name: "John",
    age: 30,
    city: "New York"
}
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// For of Loop
let fruits=["Apple","Banana","Grapes","Watermelon"];
for(let fruit of fruits){
    console.log(fruit);
    fruit++;
}

/*Examples on Loops */
// Sum of Array Elements
let numbers=[1,2,3,4,5];
let sum=0;
for(let number of numbers){
    sum=sum+number;
}
console.log(`Sum: ${sum}`);

// Finding an Element
let Colleges=["VJIT","CBIT","MGIT","MLRIT"];
let searchCollege="MGIT";
found=false;
for(let i=0;i<=Colleges.length;i++){
    if(Colleges[i]==searchCollege){
    console.log(`College ${searchCollege} is found at ${[i]}`);
    found=true;
    break;
    }
}

// Multiplication Table
for(let i=1;i<=5;i++){
        console.log(`5 x ${i} = ${i*5}`);
}

//  Filtering Even Numbers
let _numbers=[1,2,3,4,5,6,7,8,9,10];
let evenNumbers=[];
for(let i=0;i<_numbers.length;i++){
    if(_numbers[i]%2==0){
        evenNumbers.push(_numbers[i]);
    }
}
console.log(evenNumbers);