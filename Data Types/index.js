//DATA TYPES


/*There are two Data Types.
    1)Primitive/Value Types
        A)Number=Used for all numbers including integers and Floating Numbers.
        B)String=It represents the sequence of characters.
        C)Boolean=Represents either True or False.
        D)Undefined=A varibles that has been declared but not assigned any value.
        E)Null=Represnts the absence of a value.
    */
        // Number
        let age=23;
        let price=99.99;
        console.log(age);
        console.log(price);
        // String
        let fullName="Saikumar Peddarmaji";
        console.log(fullName);
        // Boolean
        let isAccepted=true;
        let isDone=false;
        console.log(isAccepted);
        console.log(isDone);
        // Undefined
        let firstName;
        console.log(firstName); 
        // Null
        let _Boxis=null;
        console.log(_Boxis); 
    /*
    2)Non-Primitive/Reference Data Types
        A)Object=Used to store Collection of Data and the complext entities.
        B)Array=Used to store the Ordered List of Values.
        C)Function=These are objects and can assign values to the functions.
        D)Date=Used to work with Dates and Time
     */
    // Object
    let employee={
        name:"Saikumar",
        UID:"1234565",
        dept:"IT",
        _role:"Software Engineer"
    }
    console.log(employee);
    console.log(employee.name);
    console.log(employee.UID);
    console.log(employee.dept);
    console.log(employee._role);

    // Array
    let Array=[1,2,3,4,5,"Saikumar","IT","Hyderabad"];
    console.log(Array);
    console.log(Array[0]);
    console.log(Array[1]);
    console.log(Array[2]);
    console.log(Array[3]);
    console.log(Array[4]);
    console.log(Array[5]);
    console.log(Array[6]);
    console.log(Array[7]);

    // Functions
    function greet(){
        return "Hello!";
    }
    console.log(greet());

    // Date
    let today=new Date();
    console.log(today);