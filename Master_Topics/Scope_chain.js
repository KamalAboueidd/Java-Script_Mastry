 // scope chain 
 //Scope in JavaScript determines where variables can be accessed within the code. The scope chain defines how JavaScript looks up variables by moving from inner scopes to outer scopes.

var user = "kamal" ;
function displayUser()
{
      // variable envaironment 
     var a = "helo"
     console.log(user); // undefined 
    //  var user = "ahmed";
}
displayUser();


var isEgyption = true ;
function showUserInfo()
{
    var username =  "ahmed";
    return function ()
    {
         var age  = 12 ;
                     console.log(isEgyption)

         return function ()
         {
            console.log(isEgyption)
         }
    }
}
showUserInfo()()();

// اختصار انت عندك كذا اسكوب جوا بعض فانكشن جوا فانكشن جوا فانكشن لو انت طلبت طباعه حاجه معينه من الفانكشن دي والحاجه دي اصلا مش موجوده فالفانكشن دي تبدا تتبع الاسكوبات بتاعتها هيا ابوها مين ابوها مثلا الفانكشن اللي فوقيها اطلع اشوف الحاجه دي فالفتكشن اللي فوقهيا لو موجوده هنفذ لو مش موجوده هطلب لابو الفانكشن دي لو لقيت هنفذ ملقتش هطلع للجلوبال لو لقيت هطبع مبلقتش هطبع ايرور يبقاانت بتشوف الاسكوب بتاعك لو مش في تبداا تتبع التشين بتاعت الاسكوب اللي انت موجود فيه بس كده.............


 // scope chain happens only during creational phase context


 // function scope  & bloack scope 
   // var is function scope 
    var  x = "dsd" 
    function scope ()
    {
         if (! 4===5)
         {
             var x = "SCOPE";
         }
    }
    console.log(x) // x is not dedfined if : found x in global will print it 


    //  let : const  block scope 

    if (4 === 4)

        {
             let y = "Block"; // same with const
        }
    // console.log(y) // Uncaught ReferenceError: y is not defined
  

     /// ex var 
    function func()
    {
         for (var i = 0 ; i < 5 ; i++ )
         {
             console.log(i)
         }
         console.log("Finaly   : " , i); // with var ------right and will be 5 in console
    }
    func()

    // ex let 
    
    function func2()
    {
         for (let i = 0 ; i < 5 ; i++ )
         {
             console.log(i)
         }
        //  console.log("Finaly   : " , i); // with let  ----- output will be : uncaught ReferenceError: i is not defined
    }
    func2()


    //   /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\\/\

    var hero = "Kamal";
   let status = "Global";

function startMission() {
    var hero = "Ahmed";
     var secret = "Top ";

    if (true) {
        let status = "Block Inside Function";
        var secret = "Top Secret Code";
        console.log(hero);     // Ahmed 
    }

    console.log(secret);   // Top Secret Code
    console.log(status);    // Global 
}

startMission();

console.log(hero);  // Kamal
// console.log(secret); 
