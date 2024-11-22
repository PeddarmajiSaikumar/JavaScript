/*
    This Keyword:
     The this keyword in JavaScript refers to the object that is executing the current function. 
     Its value depends on how and where the function is called, not where it is defined.

     Note:  * We cannot use the arrow function while we are working with the this keyword beacuse it 
              cannnot bind the given object.

            * If we want to use arrow function when working with the this keyword we need to assign 
              this keyword to some other variable such that it returns the actual value.
*/ 

// Example-1(Without arrow function)
let person={
    name:"Saikumar",
    greet:function(){
        console.log(this.name);
    },
};
person.greet();


// Example-2(Using arrow function)
let employee={
    name:"Saikumar",
    greeting:function(){
        let self=this;
        let result=()=>{
            console.log(self.name); 
        };
        result();   //calling the result function
    },
};
employee.greeting();  //calling the greeting function