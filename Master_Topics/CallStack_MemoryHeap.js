
// call stack (LIFO)Last in first out , tarck (Where we now in the code)
// we store (Primitive values dirctly only to call stack) Numbers , Strings , Booleans
// Referances ==> store the refrence only on the stack and this refrence refere to real place in the heap
// framwork is ==>Execution context 


function one()
{
    three()
     console.log("One")
}
function two()
{
     console.log("Two")
}
function three()
{
    two();
     console.log("Three")
}
function four()
{
     one(); 
     console.log("Four")
}
four();

// four one  
//two 
//three
// one
//four
// stack overflow 

function foo()
{
    foo()
}
// foo() // callstack size exceeded 