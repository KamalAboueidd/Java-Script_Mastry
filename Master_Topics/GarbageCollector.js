 // GC : Automatic Memory Management 
 // when you create an object or an array, it takes place in the memory, GC is responsible for cleaning up the memory when it is no longer needed. It helps in preventing memory leaks and optimizing the performance of the application.
 // how he decide ti delete the object or array from memory (DATA)?
 // he is used algrithm "MARK AND SWEEP" to delete the object or array from memory.
 // 1) Root start fromt global "Window" or global in node.js ;
  //2) mark all the reachable objects from the root and mark them as "reachable";
  // 3) sweep any obj and variable that is not marked as "reachable" and delete them from memory.

   // ex 
      let user = { name: "John" }
       user = null; // now the object is not "reachable" and will be deleted by GC 

         // Set => strong refereance 
         // weekSet => week refereance 
  let weakSet = new WeakSet();  
   let obj1 = { name: "omar" };
   let obj2 = { name: "osama" };
    weakSet.add(obj1);
    weakSet.add(obj2);
     console.log(weakSet.has(obj1)); // true
     console.log(weakSet.has(obj2)); // true
    //  weakSet.delete(obj1); // obj1 = null ; 
       obj1 = null ;  
   // now GC will delete the obj1 from memory because it is not reachable anymore
          console.log(weakSet.has(obj1)); // false

    // obj1 = null; // now the object is not "reachable" and will be deleted by GC