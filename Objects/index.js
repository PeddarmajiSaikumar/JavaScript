// Example-1
let employee={
    name:"Saikumar Peddarmaji",
    UID:12345,
    dept:"Software Engineer",
    tech:"Java Full-Stack"
};
console.log(employee);
console.log(employee.name);
console.log(employee.UID);
console.log(employee.dept);
console.log(employee.tech);

// Example-2
let input='name';
let student={
    name:"John",
    rollNo:21,
    school:"VHS",
    'class study':9
};
console.log(student);
console.log(student['name']);
console.log(student['rollNo']);
console.log(student['school']);
console.log(student['class study']);

/*  From the above two examples the best way to fetch the object details is 
    using the (.) operator and [] are used when there are multiple keys needed 
    to be fetched.
*/

/*  Complex Objects:Complex Objects are the objects in which the one object is 
    declared inside the other object.
    => Here below the '?' mark is used because as it denotes whether the key is 
        present or not if the key is not present it simply gives you the undefined
        or else it returns the key's value.
*/

let emp={
    username:"Saikumar Peddarmaji",
    tech_stack:"Java",
    laptop:{
        cpu:'i7',
        ram:4,
        brand:"dell"
    }
}
console.log(emp);
console.log(emp.laptop);
console.log(emp.laptop.brand);
console.log(emp?.laptop?.brand?.length);

delete emp.laptop;
console.log(emp);