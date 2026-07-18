 //  Function Invokation 
 
 
function SumAll (number1 , number2)
{
    console.log(arguments)
     let total = 0 ;
      for (let i  = 0 ; i < arguments.length ; i++)
      {
         total+=arguments[i];
      }
      return total ;
}

console.log(SumAll(12 ,12))


// Using Rest Parameters (...) gathers all incoming arguments into a true array.
function showUser(...args) {
    // 1. Printing the Rest Parameters array
    // 'args' is a genuine Array, displayed in the console with square brackets: [ "ahmed", "djskd" ]
    console.log(args); 
    
    // 2. Printing the traditional arguments object
    // 'arguments' is an Array-like Object, displayed with curly braces: { 0: "ahmed", 1: "djskd" }
    console.log(arguments); 
    
    // 3. Checking the number of elements passed into the function
    // The '.length' property is natively supported by both structures and outputs: 2
    console.log(arguments.length);
    console.log(args.length);

    // ==========================================
    //  Practical comparison demonstrating the core difference:
    // ==========================================

    // A. Rest Parameters are real arrays, so you can chain array methods like .map() directly:
    console.log("--- Testing Array Methods on args ---");
    let upperCaseArgs = args.map(item => item.toUpperCase()); 
    console.log(upperCaseArgs); // Output: [ "AHMED", "DJSKD" ]

    // B. The traditional 'arguments' is an Object. Calling .map() directly throws a TypeError:
    console.log("--- Testing Array Methods on arguments ---");
    try {
        arguments.map(item => item.toUpperCase()); // This line will fail
    } catch (error) {
        console.log("Error: arguments.map is not a function!"); // Caught and printed here
    }

    // C. To use array methods on the legacy 'arguments' object, you must convert it manually first:
    let convertedArgs = Array.from(arguments); // Creates a true array copy from the object
    try {
        console.log(convertedArgs.map(item => item.toUpperCase())); // Works perfectly now!
        console.log("works after Array.from")
    }catch(error)
    {
          console.log("Error: arguments.map is not a function!"); // not printed
    }
}

// Function invocation passing two string arguments
showUser("ahmed", "djskd");
