 // lexical envaironment : 

// A lexical environment is a special data structure in JavaScript that tracks the scope of     variables and functions at a specific point in the code.  

 // env recored : real place that store the variables and the functions 

 
 // ref to  outer env  : is a reference refer to outer env ("Parent") ==? thats make scope chain 

 // ex on lexical  env 

      
  var globalVar = "Google";
 
            // env recored is = globalVar , outerFunction 
            // outer ref  is "Null".
            function outerFunction() 
  {
     var outerVar = "FireFox" ;
          
     // env recored is ==> outerVar and  InnerFunctin
     // outer ref ===?> Global Lexical enc 
      function InnerFunctin()
      {
            // env recored is = InnerVar 
            // outer ref ==> OuterFunction
          var InnerVar = "Edge";

          console.log(globalVar);
          console.log(outerVar);
          console.log(InnerVar);
      }
       InnerFunctin();
  }
  outerFunction();