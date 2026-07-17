 // single thread

 // synchronous
 setTimeout(()=> {
       console.log("3")
 },1000)
 console.log("1")
 console.log("2")
 console.log("4")
 // output will be 
 // 1
 // 2
 // 4
 // 3


 // Web APIs / Node APIs: setTimeOut,Fetch  ==> callback queue 


 // in the callstack first is the synchrouns code , and the webapi put in the callback queue


 // MicroStack 
 // Promises ==> async/await then()

// ex : 
 console.log("Hello world"); // 1
 setTimeout(()=>{console.log("hELLO setTime out")},0) // 3
Promise.resolve().then(() => console.log("Hello Kimo")); // 2