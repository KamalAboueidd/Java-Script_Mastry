 // Global execution  : The environment in which your code is prepared and execute , any code in js must be find in execution context .

 // types of execution context 

 // 1) Global execution context 

   //  - this is the main context , any code write outside any func relate to this context 
   // - after start create 2 things  1 - create global obj ("Window") and create this keyword refere to window.
   // - only one execution context in the application .

 // 2)  Function Execution Context 
  
  //  - after (call \ invoke) to any func , js create private context for this func 
  //  - every func have  a private context , and not created as soon as if the function is executed not when write .

// 3) Eval Execution Context : not used 

//  Execution Context phases : 
 // ---- creation phase 



 



// Window is a global execution context ; 

 var place = "Apple";

   function placeHolder()
   {
     var place = "Realme";
   }
   placeHolder();
 // lexical envarironment :

    // debugger;
 var myName = "kamal"
 var lastName = "Aboueidd";

 function printName()
 {
     console.log(myName);
     PrintLastName();
     console.log("First name printed")
 }
 function PrintLastName()
 {
     console.log(lastName)
     console.log("Last name Priinted");
 }
 printName();
 // kamal
 // Aboueidd
 //Last name Priinted
 // first name printed
//  printName
//  PrintLastName

//  Output : 
