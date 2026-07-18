// Hoisting : It's one of the most important concepts in JavaScript.
// هو واحد من أهم المفاهيم في جافا سكريبت. نظرياً، بنقول إن المحرك بيـ "يرفع" المتغيرات والدوال لأعلى السكوب بتاعها قبل ما ينفذ الكود. لكن هندسياً وفي الكواليس، المحرك مش بيحرك الكود من مكانه؛ هو كل اللي بيعمله إنه بيحجز مكان في الذاكرة للحاجات دي في مرحلة الـ Creation Phase قبل ما يبدأ الـ Execution Phase.




 // hoisting with Variables 

 //  var keyword  : the declaration is hoisted , but not the value , its starts as "UNDEFINED" .
  console.log(myName);  // Output :  Undefined 
 var myName = "Kamal";

  
 // let and const : theyare hoisted but cannot be accessed yet , Error occurezs . 
//  console.log(MyLastName); // output : ncaught ReferenceError: Cannot access 'MyLastName' before initialization
//  let MyLastName = "Aboueidd" ;
//  // and the same with const 



 // function declrations : the function name and body are both hoisted . the function works fully

   console.log(sayName()); //  Output : My Name Is Kamal 
 function sayName()
 {
     return `My Name Is Kamal`
 }
// console.log(myNameFun()) // output Will be Myname is not a function 
 console.log(myNameFun)  // undefined ==> works as variable not a fuunction 
 // function expression 
 var myNameFun = function ()
 {
     return `Hello My Name is Kamal`;
    }
    // console.log(myNameFun()) // here works Fully

    // values are never hoisted 
    // function expression behave like variables 
    // TDZ: who prevent access "let " and  "const " early 

// ex  
  
var user = "omar" ;
var HelloUser = function ()
 {
   console.log(`Hello ${user}`)
   var user = "kamal";
   console.log(`Hello new User ${user}`);
     
}
HelloUser();