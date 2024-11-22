//If Statements
let score=98;
if(score>91){
    console.log("Excellent Performance");
}


//If Else Statement
let age=18;
if(age>=18){
    console.log("Eligible to Vote");
}else{
    console.log("Not Eligible to Vote");
}


//If else if Statement
let marks=78;
if(marks>90){
    console.log("A-Grade");
}else if(marks>80){
    console.log("B-Grade");
}else if(marks>70){
    console.log("C-Grade");
}else if(marks>60){
    console.log("D-Grade")
}else{
    console.log("Fail");
}

// Nested If Statements
let username="admin";
let password="12345";
if(username=="admin"){
    if(password=="12345"){
        console.log("Login Succesfull");
    }else{
        console.log("Invalid Password");
    }
}else{
    console.log("Invalid Username");
}

// Switch Statement
let fruit="grapes";
switch(fruit.toLowerCase()){
    case "banana":
        console.log("Yellow Fruit");
        break;
    case "orange":
        console.log("Oranage Fruit");
        break;
    case "apple":
        console.log("Red or Green Fruit");
        break;
    default:
        console.log("Unknown Fruit");
}