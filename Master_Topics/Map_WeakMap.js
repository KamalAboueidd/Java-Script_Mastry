 // Map : collection to store the data as key / value like object 
 // but have  Two Features 
 // key can be object , function , Number ! 
 // the arrangment is content 
 
 // set 
 // get 
 //clear 
 //size 
 //has 

 const userRole = new MaP();
 const  userKamal = {name : "kamal"};
 const userAhmed = {name : "ahmed"};
 userRole.set(userKamal, "Admin")
 userRole.set(userAhmed, "Editor");
 console.log(userRole.has(userAhmed)) // output : true
 console.log(userRole.get(userKamal))
 console.log(userRole.size); // 2 


 //use case 
 //when you need to link additional data tom specific object without edit the main onject 



 // WeakMap 
 // Key must be objects only 
 // key links is weak 
 // set 
 //get 
 //has 
 //delet 
 // xxxxxxxxxxxxxxxxx size ==> weak refrences (links to out..) ==> Gc

 let sessionUser = { id: 102 };

const userCache = new WeakMap();

userCache.set(sessionUser, "Secret_Token_XYZ");


sessionUser = null;

// use case 
// build cach and Private data 



