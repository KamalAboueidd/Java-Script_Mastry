  //  الكائن الذي يتعبر الوظيفه خاصيه له 
 
 // this ====> work with dynamic scope.

// dynamic scope 
//legcy scope 
// lexical 

 const a = function ()
 {
     console.log(this)
     const b = function ()
     {
        console.log(this)
        const c =  
        {
            name : "Tailwind",
            showThis()
            {
                 console.log(this);
            }
        };
        c.showThis();
     }
     b();
 }
 a();


 const user = {
    name : "ahmed" ,
    Collage : "CS",
    showUser()
    {
        console.log(this);
       
        var FUNC = function()
        {
             console.log(this)   // window !!!!!!!!!!!!!!!! 
        }
        FUNC();
    }
 }
user.showUser();
           /// solve it with legacy scope
 const user2 = {
    name : "ahmed" ,
    Collage : "CS",
    showUser()
    {
        console.log(this);
        var legacy = this ;           // legacy scope 
        var FUNC = function()
        {
             console.log(legacy)   // now print ahmed obj 
        }
        FUNC();
    }
 }
user2.showUser();

  // solve it with arrow function 
 const user3 = {
    name : "ahmed" ,
    Collage : "CS",
    showUser()
    {
        console.log(this);
      
        var FUNC = () => {   // اروو فانكشن هنا اجبرت الزيز انها تمشي بمبدا الليكسكال سكوب عادي وهتاخد قيمه الزيز من الحاجه اللي فوقيه او التشين اللي فوقيها او الرفيرنس اللي فوقيها اللي هيا شو يوزر فانكشن وكانت قيمتها فالزيز اي ؟ الابوبجيكت يوزر3
        {
             console.log(this)   // window !!!!!!!!!!!!!!!! 
        }
        FUNC();
    }
}
 }
user3.showUser();


// 1. Dynamic behavior (in 'this'):
// 'this' is NOT fixed. It changes based on *HOW* you call the function.
// function.call() => this points to what you pass.
// object.method() => this points to the object before the dot.
// function()       => this points to window (usually).

// 2. Lexical scoping:
// How JavaScript resolves variable names (where you wrote it).
// Where does the function find 'user' or 'legacy'? It moves outer scopes fixed.
// (Same behavior we saw with scope chain).

// 3. Arrow Function and Lexical 'this':
// It forces 'this' to behave like a normal variable using Lexical Scoping.
// It says: "Forget dynamic rules. My 'this' is whatever 'this' was in the outer scope where I am written."

// 4. legacy scoping term (in this context):
// Just a term to describe the old method of preserving 'this' by saving it to another variable (var self = this, etc.).