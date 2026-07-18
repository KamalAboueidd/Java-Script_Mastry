//   A callback function :
//  is simply a function that is passed as an argument inside another function, so that the external function calls it and executes it later once a certain event occurs or a specific task is completed.
 
 
 // callback function  : in Synchronous code 
function convertToUpperCase(text) {
    return text.toUpperCase();
}

function processWords(wordsArray, callback) {
    let result = [];
    for (let i = 0; i < wordsArray.length; i++) {

        result.push(callback(wordsArray[i]));
    }
    return result;
}

const names = ["kamal", "ahmed"];

const updatedNames = processWords(names, convertToUpperCase);
console.log(updatedNames); // Output: [ "KAMAL", "AHMED" ]



//  every number in the array is multipled * 100 with callback functions examples .

function Multiplay(num)
{
     return num * 100
}

function ProcessNumbers(numbers , callback)
{
      let arr = [] 
      for(let i = 0 ; i < numbers.length ; i++)
      {
        arr.push(Multiplay(numbers[i]));
      }
      return arr ; 
}
const numbers = [12,12,4,5,55,6];
const Result_After_Multiplyed  = ProcessNumbers(numbers , Multiplay);
console.log(Result_After_Multiplyed);




// async callbacks :  "MOST IMPORTANT " 

// using it mostly in the operations thats take time , like featching data from server , or write file , or wait and SetTimeOut , js is single threaded cannot wait


function FetchDataFromServer(callback)
{
    console.log("1 Starting data fetch......."); // 1
    setTimeout(()=> {
            const data  = {userId : 1 , name : "kamal"};
            console.log("3 Data has arrived from server  .");

            callback(data) ;
    },2000)
}
    function displayUser(user)
    {
         console.log(`4 user displayed : ${user.name}`);
    }


FetchDataFromServer(displayUser);
console.log("2 Moving to other tasks while waiting"); // 2


// callbacks in async code lead to Callback Hell and js solve that using ("Promises")


 