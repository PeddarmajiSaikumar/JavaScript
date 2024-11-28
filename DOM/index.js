// Following are the examples of getElementById() Method.
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

function fn3(){
    var select=document.getElementById("selectbox");
    alert(select.options[select.selectedIndex].value);
}

// Following is the example of getElementsByTagName() method.
function changeStyling(){
    var para=document.getElementsByTagName("p");
    for(let i=0;i<para.length;i++){
        para[i].style.fontSize="25px";
        para[i].style.fontFamily="'Courier New', Courier, monospace";
    }
}

// Following is the example of getElementsByClassName() method
function fn4(){
    var heading=document.getElementsByClassName("myheading");
    for(let i=0;i<heading.length;i++){
        heading[i].style.fontFamily="Verdana, sans-serif";
    }
}