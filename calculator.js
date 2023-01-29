//Declaring two variables. your first and second inputs
var num1 = "";
var num2 = "";

var result ;

var operation = "";
// var operationDeclared=1;

document.getElementById("numDiv").addEventListener("click", function(){
    operation="division";
    operationDeclared=0;
  })
  
  document.getElementById("numMult").addEventListener("click", function(){
      operation="multiply";
      operationDeclared=0;
    })
  
    document.getElementById("numAdd").addEventListener("click", function(){
      operation="add";
      operationDeclared=0;
      console.log("here",operationDeclared)
    })
  
    document.getElementById("numMinus").addEventListener("click", function(){
      operation="subtract";
      operationDeclared=0;
    })
//number 1
if(operationDeclared==1)
{
    document.getElementById("num1").addEventListener("click", function(){
         num1=num1+"1";
    })
    document.getElementById("num2").addEventListener("click", function(){
         num1=num1+"2";
    })
    document.getElementById("num3").addEventListener("click", function(){
         num1=num1+"3";
    })
    document.getElementById("num4").addEventListener("click", function(){
         num1=num1+"4";
    })
    document.getElementById("num5").addEventListener("click", function(){
         num1=num1+"5";
         console.log("opertionDeclared",operationDeclared)
         console.log("herenum1",num1)
    })
    document.getElementById("num6").addEventListener("click", function(){
         num1=num1+"6";
         console.log("opertionDeclared",operationDeclared)
         console.log("herenum1",num1)
    })
    document.getElementById("num7").addEventListener("click", function(){
         num1=num1+"7";
    })
    
    document.getElementById("num8").addEventListener("click", function(){
         num1=num1+"8";
    })
    document.getElementById("num9").addEventListener("click", function(){
         num1=num1+"9";
    })
    
    document.getElementById("num0").addEventListener("click", function(){
         num1=num1+"0";
    })



}



// console.log("opertion declared",operationDeclared)
if(operationDeclared==0)
{
    document.getElementById("num1").addEventListener("click", function(){
         num2=num2+"1";
    })
    document.getElementById("num2").addEventListener("click", function(){
         num2=num2+"2";
    })
    document.getElementById("num3").addEventListener("click", function(){
         num2=num2+"3";
    })
    document.getElementById("num4").addEventListener("click", function(){
         num2=num2+"4";
    })
    document.getElementById("num5").addEventListener("click", function(){
         num2=num2+"5";
         console.log("opertionDeclared",operationDeclared)
         console.log("herenum2",num2)
    })
    document.getElementById("num6").addEventListener("click", function(){
         num2=num2+"6";
         console.log("opertionDeclared",operationDeclared)
         console.log("herenum2",num2)
    })
    document.getElementById("num7").addEventListener("click", function(){
         num2=num2+"7";
    })
    
    document.getElementById("num8").addEventListener("click", function(){
         num2=num2+"8";
    })
    document.getElementById("num9").addEventListener("click", function(){
         num2=num2+"9";
    })
    
    document.getElementById("num0").addEventListener("click", function(){
         num2=num2+"0";
    })
}



//number 2


//operation


function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function divide(a, b)
{
    return a / b;
}

function multiply(a, b)
{
    return a * b;
}

document.getElementById("numEquals").addEventListener("click", function()
{
    if(operation=="add"){
     result=add(Number(num1),Number(num2))
    // console
    
     console.log("result",num1,num2,operationDeclared)

    }
})