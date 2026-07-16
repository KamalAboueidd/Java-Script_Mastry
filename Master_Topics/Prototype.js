 // opposite of c++ and jave based on classes classical way , js uses the prototypes to check inheratance .

 // js is prototype based language , every object has a prototype and it is used to check the inheritance of the object.
  
 // prototypal inhertance 
    function name()
    {
        console.log("this is a function");
    }
    console.log(name.__proto__.__proto__); // it will show the prototype of the function name
   
 const userOne = {
     name : "kamal",
     key : 22,
     showUser: function (){
        console.log(`user  is ${this.name}`);
     }
 }
//  const userTwo = {
//       name : "omar"
//  }
//   userTwo.__proto__ = userOne; // now userTwo is inheriting from userOne
   userTow = Object.create(userOne); // now userTwo is inheriting from userOne
   userTow.name = "osama";
  userTow.showUser();
  console.log(userTow.__proto__); // it will show the prototype of the object userOne
 
  for (let prop in userTow)
  {
     if (userTow.hasOwnProperty(prop))
     {
        console.log(`own property ${prop}`);
     }
  }
  
 // __proto__ bad performance and not recommended to use it , instead use Object.create() to create a new object and inherit from another object.

//  userTow.__proto__ = userOne; // == userTow = Object.create(userOne); // now userTwo is inheriting from userOne
const obj = {}

console.log(obj.__proto__); // it will show the prototype of the object obj 
console.log(obj.__proto__.__proto__); // Null => it is the end of the prototype chain

console.log(Object.prototype); // it will show the prototype of the object Object
console.log(Object.prototype.__proto__);  // Null => it is the end of the prototype chain


function Person (name)
{
   this.name = name ;
}
console.log(Person.prototype); // it will show the prototype of the function Person

Person.prototype.showName = function (){
   console.log(`name is ${this.name}`);
}


const amr = new Person("amr");
amr.showName();
console.log(amr.__proto__);
console.log(amr.__proto__ === Person.prototype); // true => it means that the prototype of the object amr is the same as the prototype of the function Person


 // amr not have property prototype but it has refrence to __proto__ which  refere to object Person.prototype and this is how the inheritance works in js.


 const user1 = {
     name: "omar"
 };

 const user2 = Object.create(user1); // now user2 is inheriting from user1

 user1.sayHello = function ()
 {
     console.log(`hello ${this.name}`);
 }

 user2.sayHello(); // this will work because user2 inherits from user1
 user2.name = "ALi"
 user2.sayHello(); // this will work because user2 inherits from user1 and this.name will refer to user2.name

  // Array() Function => Array.prototype
 const object1 = {} //  object objec1
// Object , Array , Function ==>   Object.prototype , Array.prototype , Function.prototype
 console.log(object1.__proto__ == Object.prototype); // true => it means that the prototype of the object object1 is the same as the prototype of the function Object

 const array1 = [] //  object array1
 console.log(array1.__proto__ == Array.prototype); // true => it means that the prototype of the object array1 is the same as the prototype of the function Array

 function sayHello() {}

 console.log(sayHello.__proto__ == Function.prototype); // true => it means that the prototype of the function sayHello is the same as the prototype of the function Function


 // ProtoType chain => it is a chain of prototypes that are linked together to form a chain of inheritance.

 function Person1(name) {
      this.name = name ;
 }
Person1.prototype.sayHello = function ()
{
     console.log(`hello ${this.name}`);
} 
const ahmed = Object.create(Person1.prototype); // now ahmed is inheriting from Person1.prototype 
// == const amr = new Person1("amr"); // now amr is inheriting from Person1.prototype
console.log("======================")
console.log(ahmed.__proto__); //
ahmed.name = "Ahmed";
ahmed.sayHello(); // this will work because ahmed inherits from Person1.prototype
console.log(ahmed.__proto__ === Person1.prototype); // now ahmed is inheriting from Person1.prototype  

// ahmed.sayHello();  look to ahmed obj he has sayhello() ? no : look at ahmed.__proto__ he has sayhello() ? yes => so it will call the function sayHello() from Person1.prototype ,if nout found it will look at ahmed.__proto__.__proto__ => you has sayHlloe ? if not give you null and return undefined. 
// this is how the prototype chain works in js.



///////
const carPrototype = {
  wheels: 4,
  drive() {
    console.log("Vroom Vroom!");
  }
};


const myCar = Object.create(carPrototype);

myCar.color = "Red"; 

console.log(myCar.color); 
console.log(myCar.wheels);
myCar.drive(); 

console.log(myCar.__proto__ === carPrototype); // true
console.log(myCar.__proto__.__proto__ === carPrototype.__proto__); 
const pureObj = Object.create(null);
console.log(pureObj.__proto__);  // undefined => it means that the prototype of the object pureObj is null and it does not inherit from any object



// __proto__ is the actual link used by the JS engine to traverse the prototype chain, while prototype is an object belonging only to functions used to set the __proto__ of new instances created with new

function Device(brand) {
  this.brand = brand;
}

const phone = new Device("Apple");
Device.prototype = {
  getBrand() {
    return this.brand;
  }
};

console.log(typeof phone.getBrand); // undefined => because the prototype of the function Device has been changed after the object phone has been created, so the object phone does not have access to the new prototype of the function Device




const user = Object.create(null);
user.name = "John";
console.log(user.name); // 
console.log(user.hasOwnProperty("name")) // TypeError: user.hasOwnProperty is not a function => because the prototype of the object user is null and it does not inherit from any object, so it does not have access to the hasOwnProperty() method of the Object.prototype




// 
function Device(brand) {
  this.brand = brand;
}

const phone = new Device("Apple"); // this will create a new object phone and set its __proto__ to Device.prototype
// and calll the function and change the this value  ,and implcit return 
 // now !
 //  phone = {
//   brand: "Apple",
//   __proto__: Device.prototype 
// }

Device.prototype = {
  getBrand() {
    return this.brand;
  }
};

console.log(typeof phone.getBrand);