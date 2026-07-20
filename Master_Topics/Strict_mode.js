 
 //  strict mode   =>  الظالط اللي بينزل يظبط المرور ف الجافاسكريبت علشان الفوضي تنتهي 

 // strict mode upladed at es5  
 // stric moode  وضع صارم بالمعني الحرفي , زي فلتر او مود بنشغله علشان ف يخلي المصفح بتعامل مع الكود اللي كاتبه بقوواعد او بشكل صارم جدا 

   //convert silt error to errors (thows errors)
    // help to optmize the code and make it work fast 
     // revent use reserved words 
     // syntex 
     // in the top of the file code  (Global scope)
//      //
//   Prevents Accidental Globals: Throws a ReferenceError if you assign a value to an undeclared variable (prevents creating unintended global  variables).

// Makes Silent Failures Visible: Throws explicit Errors for actions that previously failed silently in sloppy mode (e.g., trying to write to a  read-only property).

// Fixes this in Functions: Sets the value of this to undefined in plain function calls (instead of defaulting to the window object).

// Forbids Deleting Variables/Functions: Throws a SyntaxError if you attempt to use the delete operator on variables, functions, or function arguments.

// Prevents Duplicate Parameters: Throws a SyntaxError if a function declaration contains two parameters with the exact same name.

// Restricts the with Statement: Completely bans the use of the with() statement (throws a SyntaxError).

// Limits eval() Capability: Variables declared inside an eval() call are now contained within eval's scope and cannot leak out to the surrounding scope.

// Blocks Obsolete Octal Syntax: Throws a SyntaxError if you try to define octal literals using a leading zero (e.g., var x = 010;).

// Reserves Future Keywords: Prevents the use of reserved words planned for future ECMAScript releases as variable/function names (e.g., interface, public, private, static).

     "use strict";  //  now you are using strict mode 

      x = 10;
      console.log(x); // Reference error x is not defined (because not declared ) .
///////////////////
      function x ()
      {
        console.log(this) // undefined not Window obj 
      }
/////////////////

 const obj1 = Object.freeze({prop : 22});  // 
 obj1.prop = 22 ;   //  Cannot assign to read only property 'prop' of object '#<Object>'
   console.log(obj1) 



