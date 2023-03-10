//Declaring two variables. your first and second inputs
var num1 = "";
var num2 = "";

var result ;

var operation = "";
var operationDeclared=0;


var a=document.getElementsByClassName("number")
console.log(a)

document.getElementById("numDiv").addEventListener("click", function(){
    operation="divide";
    operationDeclared=1;
    result = num1;
  })
  
  document.getElementById("numMult").addEventListener("click", function(){
      operation="multiply";
      operationDeclared=1;
    })
  
    document.getElementById("numAdd").addEventListener("click", function(){
      operation="add";
      operationDeclared=1;
    })
  
    document.getElementById("numMinus").addEventListener("click", function(){
      operation="subtract";
      operationDeclared=1;
    })
//number 1

   

//     document.getElementById("num1").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"1";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"1";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num2").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"2";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"2";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num3").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"3";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"3";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num4").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"4";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"4";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num5").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"5";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"5";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num6").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"6";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"6";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num7").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"7";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"7";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num8").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"8";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"8";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num9").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"9";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"9";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num0").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"0";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"0";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })


var numbers=document.getElementsByClassName("number")
for (i=0;i<numbers.length; i++){
     numbers[i].addEventListener("click",function(){
          if(!operationDeclared){
               num1=num1+this.innerHTML;
               document.getElementById("display").innerHTML = num1;
          }
          else
          {
               num2=num2+this.innerHTML;
               document.getElementById("display").innerHTML = num2;
          }
     }
     )  
}



//     document.getElementById("num1").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"1";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"1";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num2").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"2";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"2";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num3").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"3";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"3";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num4").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"4";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"4";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num5").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"5";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"5";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num6").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"6";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"6";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num7").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"7";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"7";
//           document.getElementById("display").innerHTML = num2;
//      }
        

//     })
//     document.getElementById("num8").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"8";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"8";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num9").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"9";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"9";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num0").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"0";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"0";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })

//     document.getElementById("numDecimal").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+".";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+".";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })


//     document.getElementById("num8").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"8";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"8";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num9").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"9";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"9";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
//     document.getElementById("num0").addEventListener("click", function(){
//      if(!operationDeclared){
//           num1=num1+"0";
//           document.getElementById("display").innerHTML = num1;
//      }
//      else{
//           num2=num2+"0";
//           document.getElementById("display").innerHTML = num2;
//      }
        
//     })
    document.getElementById("numDecimal").addEventListener("click", function(){
     if(!operationDeclared){
          num1=num1+".";
          document.getElementById("display").innerHTML = num1;
     }
     else{
          num2=num2+".";
          document.getElementById("display").innerHTML = num2;
     }
        
    })

    









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
     console.log("result",num1,num2,result)
     }
     if(operation=="subtract"){
          result=subtract(Number(num1),Number(num2))
          console.log("result", num1,num2,result)
     }
     if(operation=="divide"){
          result=divide(Number(num1),Number(num2))
          console.log("result", num1,num2,result)
     }
     if(operation=="multiply"){
          result=multiply(Number(num1),Number(num2))
          console.log("result", num1,num2,result)
     }
     document.getElementById("display").innerHTML = result;
     num1="";
     num2="";
     operation="";
     operationDeclared=0;

})
document.getElementById("numClear").addEventListener("click", function()
{
     num1="";
     num2="";
     operation="";
     operationDeclared=0;
     document.getElementById("display").innerHTML = "";
})







