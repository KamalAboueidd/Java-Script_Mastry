//    primative data typs  (pass by value ) ;
 // Number , string ,boolean , undefined , Null ,BegInt ,Symbol 

   let one = 12 ;
   let  two = one ;
   one ++ ;
   console.log(one) // 13
   console.log(two) // 12  not impct to the increament .

 // non primitives ==> *(pass by references )
 /// Arrays , objects , function 
//    Its actual, large value is stored within the Heap Memory (because its size is dynamic and can increase). The Stack Memory, on the other hand, only stores a reference (address/pointer) that indicates the object's location within the Heap.

 // cloning types 
 // shallow   {...} Object.assign({},) <== obj , arr ==> [...] , [].concat() 
 // deep  JSON.parse(JSON.stringify(obj))  , structuredClone(obj)


 console.log("##".repeat(22) + " Non - premetives " + "##".repeat(22))

const user = {
    name: "kamal",
    age: 22
};

const user2 = user; // Copying the REFERENCE (pointer)

user2.age = 25; // Modifying user2 will modify user1

console.log("Reference Trap - user.age:", user.age);   // Output: 25 
console.log("Reference Trap - user2.age:", user2.age); // Output: 25      // both impcts to this change ..



 // shallow copy 
   console.log("##".repeat(22) + " Shallow copy " + "##".repeat(22))


const developer = {
    name: "Kamal",
    skills: {
        primary: "JavaScript",
        secondary: "Node"
    }
};

// Ways to shallow clone an object: 
const shallowDev1 = { ...developer }; // 1 
const shallowDev2 = Object.assign({}, developer); // 2  
// both 1 , 2 make shallow copy  properties of the main object that in level one not imapect


shallowDev1.name = "Ahmed"; // Modifying level 1
console.log(developer) // now with shallow copy level 1 propertites develpoer obj not imapct ...
console.log(shallowDev1);

// if we change from the valuesb thats in the level 2 in the object 

shallowDev1.skills.secondary = ".Net Core"; // if i change the 2 level prop all obj are impacts...


console.log(developer.skills.secondary)
console.log(shallowDev1.skills.secondary)

// how solve that  ?  Deep clone 






// Ways to shallow clone an array: [...]  , [].concat() .
   console.log("#".repeat(12) + " Shallow copy with arrays   " + "#".repeat(12));
const tags = ["frontend", "backend"];
const shallowTags1 = [...tags]; // spread operator ... ;
const shallowTags2 = [].concat(tags);

shallowTags1[0] = "Cloud computing " ;  // ttttt now only shallowTags1 array are impacts 
shallowTags2[1] = "Cloud computing " ;  
console.log(shallowTags1)
console.log(shallowTags2)
console.log(tags)



// // =========================================================================
// Deep Clone  => JSON , StructuredClone

const Gamer  = {
    nickname: "Kamal Pro",
    stats: {
        level: 50,
        rank: "Diamond"
    }
};
  // i want if i chang property from level 2 the real object "Gamer" not imapct to this change \
  

  // JSON WAY 
const deepGamer1 = JSON.parse(JSON.stringify(Gamer));
deepGamer1.stats.rank = "Expert";

//structuredClone -> Best practice!
const deepGamer2 = structuredClone(Gamer);

// // Testing the deep clone:
deepGamer2.stats.rank = "Immortal"; // Modifying deep nested level

console.log("Deep Clone - Original Gamer Rank:", Gamer.stats.rank , "And the new Value at deepGamer1 obj is " ,deepGamer1.stats.rank); 
 
// now the values of the real object Gammer not changed .


let age = 22 ;
let age2 = age ;
age2 = 33;
let obj1 = {
     name : "kamal",
     age : 22 
}
let obj2 = obj1;
obj2.name = "kimo";
