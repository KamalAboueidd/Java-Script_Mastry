  // Call , apply  , Bind

   const charOne  = {
    name : "kamal",
    health : 70 ,
    fullHealth(){
         return this.health = 100 ;
    }
   };
   const charTwo = {
     name : "Aboueid",
     health:30 ,
   } // how can make charTwo health without writing FullHealth function inside charTwo obj ?

   console.log(charTwo.health); // 30 
   charOne.fullHealth.call(charTwo);
   console.log(charTwo.health); // 100 

   // call with args 

   
   const calc1Obj = {
       name : "one",
       res : 0,
       calc(num1 , num2)
       { 
        return this.res = num1 + num2 
       }
   };
console.log(calc1Obj.res);
calc1Obj.calc(12,12);
console.log(calc1Obj.res);

   const calc2Obj = {
       name : "one",
       res : 0,
    
   };

   console.log(calc2Obj.res); // 0 
   calc1Obj.calc.call(calc2Obj,12,13); // arguments
   console.log(calc2Obj.res)

  console.log("#".repeat(20) + "  Applay " + "#".repeat(20))
   // apply : applay works as call but iif you pass values as an arrays must be passing within an array . 
   const calc3Obj = {
       name : "one",
       res : 0,
       calc(num1 , num2)
       { 
        return this.res = num1 + num2 
       }
   };
console.log(calc3Obj.res);
calc3Obj.calc(40,11);
console.log(calc3Obj.res);

   const calc4Obj = {
       name : "one",
       res : 0,
    
   };

   console.log(calc4Obj.res); // 0 
   calc3Obj.calc.apply(calc4Obj,[12,70]); // arguments
   console.log(calc4Obj.res)

/// call , apply ==> when you want call method with an object this method not defined in that object 



const  one = 
{
     name : "one",
     sayHello(keywoard , name)
     {
       return ` ${keywoard} : ${name}`;
     }
}

const two = 
{
      nmae : "two"
}
console.log(one.sayHello("Hello", "ahmed"))
var hi = one.sayHello.bind(two,"hello","omar")
console.log(hi());

// bind : if you want to assign the return function to variable , this variabel will be used later



// bind with this value ex :

const airplane1 = {
    airline: "EgyptAir",
    flightNumber: "MS777",
   
    fly() {
        console.log(`Flight ${this.flightNumber} by ${this.airline} is now airborne!`);
    }
};


const airplane2 = {
    airline: "Emirates",
    flightNumber: "EK202"
};


const looseFly = airplane1.fly; 

looseFly();  // ....  undefined .......... undefined 

const flyEmirates = airplane1.fly.bind(airplane2); // save this value 

console.log("Preparing for takeoff...");

flyEmirates(); 


const counter = {
     count : 0 ,
     increment()
     {
         this.count++;
         console.log("The Counter increament by 1 the counter now is : ", this.count);
     }
};
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()

const newCounter = counter.increment.bind(counter); // MAGIC bind 
newCounter();
newCounter();
newCounter();
newCounter();



function multiply (a,b)
{
     return a * b 
}

const trible = multiply.bind(null,3); // means now when you call "trible" variable as function you will pass only one arg and the 3 is a cost val;
const quintuple = multiply.bind(null, 5);  // the same is here 5 is a constant
console.log(trible(44)); // 44*3
console.log(quintuple(12))  // 12 * 5 





const order = {
    id: 4892,
    item: "Premium Mechanical Keyboard",
    status: "Pending",
    
    processOrder() {
        this.status = "Shipped";
        console.log(`Order ${this.id} for "${this.item}" has been ${this.status}!`);
    }
};
setTimeout(order.processOrder,2000); // Order undefined for "undefined" has been Shipped!

setTimeout(order.processOrder.bind(order),2000) //  4892 for "Premium Mechanical Keyboard" has been Shipped!