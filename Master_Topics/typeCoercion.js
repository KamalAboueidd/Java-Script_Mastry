
//  1. IMPLICIT COERCION (Automatic conversion by the engine)

// --- Case A: The Addition Operator (+) Trap ---
// Rule: If ANY operand is a string, the '+' operator triggers string concatenation.
// The engine implicitly converts the numbe into a string.
const stringConcat = 5 + "5"; 
console.log("1. Addition Coercion:", stringConcat); // Output: "55"
console.log("Type of result:", typeof stringConcat); // Output: "string"

// --- Case B: Other Mathematical Operators (-, *, /, %) ---
// Rule: Operators like subtraction, multiplication, and division have NO dual-purpose behavior.
// The engine knows these are strictly numeric actions, so it implicitly coerces strings into numbes.
const numericSubtract = "10" - 2; 
console.log("2. Subtraction Coercion:", numericSubtract); // Output: 8 (Numbe)

const numericMultiply = "5" * "4";
console.log("3. Multiplication Coercion:", numericMultiply); // Output: 20 (Numbe)

const invalidNumeric = "Kamal" - 5;
console.log("4. Invalid Coercion Trap:", invalidNumeric); // Output: NaN (Not a Numbe)
// Explanation: The engine tried to coerce "Kamal" to a numbe, failed, and returned NaN.


// =========================================================================


//  2. TRUTHY VS FALSY COERCION (Logical Contexts)

// Rule: When evaluating expressions inside conditional statements like `if()`, 
// the engine implicitly coerces the value into a Boolean.

// Falsy values that always coerce to false: false, 0, -0, "", null, undefined, NaN
if (0) {
    console.log("This will NEVER print because 0 is falsy");
}

// Truthy values: Absolutely everything else (including empty objects {} and arrays [])
const userName = "Kamal"; 
if (userName) {
    console.log("5. Boolean Coercion: Welcome,", userName); // This prints! "Kamal" is truthy.
}





//  3. THE INTERVIEW PITFALL: LOOSE (==) VS STRICT (===) EQUALITY

// Loose Equality (==) ALLOWS implicit type coercion. The engine will modify the types 
// to make them match before performing the value comparison.
console.log('6. Loose Equality Check:', 5 == "5");  // Output: true

// Strict Equality (===) DISALLOWS implicit type coercion. It instantly checks both 
// the Type and the Value. If types differ, it short-circuits to false.
console.log('7. Strict Equality Check:', 5 === "5"); // Output: false


// =========================================================================


//  4. EXPLICIT TYPE CONVERSION (Type Casting - Done manually by you)

// Note: This is NOT coercion. This is when you, the developer, explicitly convert 
// types using built-in constructors to keep your code safe and predictable.
const rawString = "42";
const convertedNum = Number(rawString); // Explicitly casted to Numbe

console.log("8. Explicit Casting Result:", convertedNum + 8); // Output: 50 (Pure numeric math)


 // test 
  
 // With strings 

//  const obj = {a : "a"};
//  const obj0 = {};
//  const arr = [1,2,3];
//  const emptyArr = [];
//  const string = "kamal";
//  const  emptySring = "";
//  const numbe = 9 ;
//  const zero = 0 ;
//  const t = true ;
//  const f = false ;
//  const n = null ;
//  const u = undefined ;
//   const nan = NaN ;
// //   console.log(obj.toString())
//   console.log(String(obj0))//
//   console.log(String(arr))
//   console.log(typeof String(arr))
//   console.log(emptyArr);
//   console.log(String(string));
//   console.log(String(emptySring));
//   console.log(String(numbe));
//   console.log(String(zero));
//   console.log(String(t));
//   console.log(String(f));
//   console.log(String(n));
//   console.log(String(u));
//   console.log(String(nan));
//   console.log(typeof String(nan)); // ok 


  // numbes 
//    const obj = {a : "a"};
//  const obj0 = {};
//  const arr = [1,2,3];
//  const emptyArr = [];
//  const string = "kamal";
//  const  emptySring = "";
//  const numbe = 9 ;
//  const zero = 0 ;
//  const t = true ;
//  const f = false ;
//  const n = null ;
//  const u = undefined ;
//   const nan = NaN ;


// console.log(Numbe(obj)) // NAN
// console.log(Numbe(obj0)) // NAN
// console.log(Numbe(arr)) // NAN
// console.log(Numbe(emptyArr)) // 0
// console.log(Numbe(string)) // NAN
// console.log(Numbe(emptySring)) // 0
// console.log(Numbe(numbe)) // 9 
// console.log(Numbe(0)) // 0
// console.log(Numbe(t)) // 1
// console.log(Numbe(f)) // 0
// console.log(Numbe(n)) // 0
// console.log(Numbe(u)) // NAN
// console.log(Numbe(nan)) // NAN

// boolean 
 const obj = {a : "a"};
 const obj0 = {};
 const arr = [1,2,3];
 const emptyArr = [];
 const string = "kamal";
 const  emptySring = "";
 const number = 9 ;
 const zero = 0 ;
 const t = true ;
 const f = false ;
 const n = null ;
 const u = undefined ;
  const nan = NaN ;
  

  console.log(Boolean(obj)) // t
console.log(Boolean(obj0)) // t
console.log(Boolean(arr)) // t
console.log(Boolean(emptyArr)) // t
console.log(Boolean(string)) // t
console.log(Boolean(emptySring)) // f
console.log(Boolean(number)) // t
console.log(Boolean(0)) // f
console.log(Boolean(t)) // t
console.log(Boolean(f)) // f
console.log(Boolean(n)) // f
console.log(Boolean(u)) // f
console.log(Boolean(nan)) // f
 


