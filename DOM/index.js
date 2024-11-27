function buttonClick(){
    document.getElementById("heading1").innerHTML="Welcome Saikumar Peddarmaji!";
}

function fn1(){
    var str=document.getElementById("text1").value;
    var str2=document.getElementById("text2").value;
    if(str==str2){
        alert("Valid Credentials");
    }else{
        alert("Invalid Credentials");
    }
}

function fn2(){
    var rd1=document.getElementById("rd1");
    var rd2=document.getElementById("rd2");
    if(rd1.checked==true){
        alert("The channel selected is: "+rd1.value);
    }else if(rd2.checked==true){
        alert("The channel selected is: "+rd2.value);
    }else{
        alert("None of the Chennels Selected");
    }
}