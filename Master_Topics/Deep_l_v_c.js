
//  THE ULTIMATE VAR vs LET vs CONST DEEP DIVE 


//  1. Hoisting & Initialization 

console.log(myVar);  
// Output: undefined 
//: 'var' is hoisted and initialized with 'undefined' during Creation Phase


// console.log(myLet);  Output: ReferenceError: Cannot access 'myLet' before initialization
//  'let' is hoisted but remains inside the Temporal Dead Zone (TDZ) until its declaration line.


var myVar = "Kamal";
let myLet = "Aboueid";


//  2. Scope Constraints 
   // VAR : function scope 
   // let const : block scope 
    
if (true) {
    var functionScoped = "I can escape blocks";
    let blockScoped = "I am trapped in this block";
}

console.log(functionScoped);  Output: "I can escape blocks"
//  'var' ignores block scopes (like if/for) and is accessible anywhere in the surrounding function/global scope.


// console.log(blockScoped);  Output: ReferenceError: blockScoped is not defined
//  'let' and 'const' are strictly block-scoped and destroyed once the block closes.



//  3. Re-declaration vs Reassignment

var score = 10;
var score = 20; 
console.log(score); //  Output: 20
//  'var' allows re-declaration within the same scope without any compiler errors


let health = 100;
// let health = 90;  Output: SyntaxError: Identifier 'health' has already been declared
// English: 'let' and 'const' forbid re-declaration in the same scope, throwing a compile-time error.


const user = { name: "Kamal" };
user.name = "Ahmed"; 
console.log(user.name);// Output: "Ahmed"
// English: 'const' prevents reassignment of the variable reference, but mutating properties inside an object is perfectly valid.


// user = { name: "Ali" }; 
// Output: TypeError: Assignment to constant variable.
//  Reassigning a completely new object to a 'const' variable breaks the constant binding and throws an error.



//  4. Global Object Binding 

var globalVar = "Attached to Window";
let globalLet = "Isolated Scope";

console.log(window.globalVar); 
// Output: "Attached to Window"
// Global 'var' declarations are automatically attached as properties of the global 'window' object.


console.log(window.globalLet); 
// Output: undefined
//  Global 'let' and 'const' live in a declarative environment record and do not pollute the 'window' object.
