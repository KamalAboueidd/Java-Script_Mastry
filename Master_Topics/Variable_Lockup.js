// Variable Lookup is the precise process, or algorithmic mechanism, find the value of the variable based on the name ;

// Key Rules of Variable Lookup
// Inside-Out: The engine always looks in the current executing scope first. If it cannot find the variable there,
//  it moves to the parent scope(scope chain), and continues moving upward one level at a time.

// First Match Wins: The lookup stops as soon as the engine finds a variable matching the name, even if other variables with the same name exist further up the chain (this is called "shadowing") 

// The End of the Line: If the engine reaches the Global Scope and still cannot find the variable, it will typically throw a ReferenceError.



let name = "Roqaya";   // in global scope 
function sayHello() {
    // sayHello lexical scope 
    console.log("Hello : ", name)  // first thing saearch on name variable in the sayhello scope , not found ? go to outer scope "global"
}


let name1 = "Roqaya";
function sayHello1() {
    let name1 = "kamal"; // shadwing 
    console.log("Hello : ", name1)
}

const commanGreating = "Welcome";
function createGreatingManager(userName) {

    return function generateFinalMessage() {
        let commanGreating = "Hi"; // shadwing  مش هيبص علي الاوتر 
        const street = "Alexandria Abo Qir st."
        console.log(`[Log]${commanGreating} , ${userName} from ${street}`);
    }
}
const manger = createGreatingManager("Kamal");
manger();