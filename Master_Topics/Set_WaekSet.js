  //SET , WEAK Set 


  // set ==> uniqe values 
   // It's a smart array that doesn't allow duplicate values. If you try to add a value that already exists, JavaScript will completely ignore it.

  // most functions uses with set is 
  // 1 - add 
  // 2 - delete 
  // 3 - has 
  // 4 -clear 
  // 5 - size 
  const UniquUsers = new Set();

  UniquUsers.add("KAMAL");
  UniquUsers.add("AHMED");
  UniquUsers.add("ALI");


console.log(uniqueUsers.size); // output : 2 
console.log(uniqueUsers.has("ahmed")); // output : false 

UniquUsers.forEach((user)=> console.log(user));

// use cases 
// if i want clear my array from the redundent values
 
const numbers = [1,1,2,3,4,4,5];
const UniqueNumbers = [...new Set(numbers)]; // [1,2,3,4,5]


//Weakset : diff set in two somthing in (mempory manegemnt).
 // store objects only  
 // Weak reference , if the obj that in WeakSet if dont have outside variable refere to him Gc delete it from memory and weakset 

 // add 
 // has
 // delete 
 // xxxxxxxxxxxx  size , foreach ====>Gc

 let computer = {brand : "Dell"};
 const activeComputer = new WeakSet();
 activeComputer.add(computer);
 console.log(activeComputer)

 // use cases 
   // only track object , like do elmet , if obj not used delte from memory 
   
