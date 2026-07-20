  // HOF  ==> function accept func as param(callbackfunc ) and return another func .
function generateTokenLoop(iterations) {
    let tokenData = [];
    for (let i = 0; i < iterations; i++) {
        tokenData.push(i);
    }
    console.log(`-> Processed security loop for ${iterations} cycles.`);
    console.log( tokenData);
}
function getLoginMessage(name) {
    return `User logged in successfully as: ${name}`;
}

function checkAuthorization(userObj, authCallback) {  // take func as param
    if (userObj.level === "admin") {
        authCallback(30); 
    } else if (userObj.level === "user") {
        authCallback(40); 
    }
    return getLoginMessage(userObj.name); // retun func
} 
const currentUser = {
    level: "admin",
    name: "Kamal" 
};



const resultMessage = checkAuthorization(currentUser, generateTokenLoop);

console.log(resultMessage);

 // 
//  we prevent 
//    function multiplay2 (num)
//    {
//        return  num * 2
//    }
//    function multiplay10 (num)
//    {
//        return  num * 10
//    }
  
// HOF ex 
 
// const multiplayBy = function (num1)
// {
//      return function (num2)
//      {
//          return num1 * num2 
//      }
// }
 const multiplayBy = (num1) => (num2) => num1 * num2;
// console.log(multiplayBy(2)(10)); //
const MltiplayByTwo = multiplayBy(2);
const MltiplayByTen = multiplayBy(10);
console.log(MltiplayByTwo(10));
console.log(MltiplayByTen(10));
  

// another ex 
 function RandomNumberGenerator()
 {
     return Math.floor(Math.random()* 1000)
 }

function id(name , rand)
{
     return `${name} - ${rand()}`;
}
const userId = id("Kamal",RandomNumberGenerator); // here the "RandomNumberGenerator " is a callback func
console.log(userId)

 




