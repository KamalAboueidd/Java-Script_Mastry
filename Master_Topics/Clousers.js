// clousers in javascript :
// Ability of the function to save the variables (lexical environment) 
// The function remember the variables that was in the scope where it was created even after the function has returned
//  The function "traps" or "remembers" the variables that were in its surrounding environment (the place where it was originally created), even after that environment dies, finishes executing, and leaves the Call Stack

function buildFunctions() {
    const arr = []
    for (let i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i)
        })
    }
    return arr
}

const funcs1 = buildFunctions()
funcs1[0]() // 0
funcs1[1]() // 1
funcs1[2]() // 2


function buildFunctionsNoBlock() {
    const arr = []
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i)
        })
    }
    return arr
}

const funcs2 = buildFunctionsNoBlock()
funcs2[0]() // 3
funcs2[1]() // 3
funcs2[2]() // 3


function outer() {
    let name = "Alice"
    function inner() {
        console.log("Inner said: Hello " + name) // this is the closure the inner function remembers the outer function's variables even after the outer function has returned
    }
    return inner
}

const myFunc = outer()  // closure created here
myFunc()  // prints "Hello Alice"


function bankAccount(initialBalance) {
    let balance = initialBalance

    return {
        deposit: function (amount) {
            balance += amount
            console.log("Deposited: " + amount)
        },
        withdraw: function (amount) {
            if (amount <= balance) {
                balance -= amount
                console.log("Withdrawn: " + amount)
            } else {
                console.log("Insufficient funds")
            }
        },
        getBalance: function () {
            return balance
        }
    }
}

const account = bankAccount(1000)
account.deposit(200)
account.withdraw(500)
console.log("Final balance: " + account.getBalance())

function Counter() // retrun function means ? that function will have acsess to the scope of the outer function  means the closure  
{
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
}

const counter = Counter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4


//   كبسولة الـ Closure في دماغك:
// الـ Closures هي سحر جافا سكريبت في حبس المتغيرات.

// الفانكشن بترجع فانكشن تانية، والفانكشن اللي راجعة بتفتكر بيانات الفانكشن اللي برة للأبد.

// الفكرة الأساسية هي حفظ البيانات (State Isolation)، زي إنك تعمل متغير مفيش حد برة يقدر يقرأه غير الفانكشن اللي جواك.


var person = function (Pname) {
    var name = Pname;
    this.getName = function () {
        return name;    // getName function need the variable name from the outer function (person) to
        //  return it but it can not access to it directly , because it is in the outer function's scope  
        //  so it will use the clousers to access to it 
    }
}

const _person = new person("kamal");
console.log(_person.name);   //  ""
console.log(_person.getName()); // kamal


console.log("#".repeat(20) + " scope chain ex " + "#".repeat(20))
let globalName = "Kamal";

console.log("Global Context: I can see", globalName); /


// --- Function A Scope ---
function firstFunction() {

    let localA = "Aboueid";
    function inner() {
        localA = "kimo";
        console.log("hello ", localA)
    }
    inner();
    function secondInner() {

        console.log("hello ", localA)
    }
    console.log("firstFunction Context: I can see my local:", localA); // Output: Aboueid

    // S-t-r-e-t-c-h-i-n-g up the Scope Chain to the global level
    console.log("firstFunction Context: AND I can see global:", globalName); // Output: Kamal
}


// --- Execution ---
firstFunction();