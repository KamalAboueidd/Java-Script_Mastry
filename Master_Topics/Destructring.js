 // Destructring : it’s a syntax that allows you to unpack values from arrays, 
 // or properties from objects, into distinct, individual variables.
 const realWorldUser = {
    id: 101,
    fullName: "Kamal Aboueid",
    role: "softwareEngineer",
    contact: {
        email: "kamal@js.dev",
        phone: "123-456",
        address: {
          egypt : "Alexandria",
          saudi : "Dmam",
          emirates : "Dubai"
        }
    }
};
const {fullName :name , contact :{email , phone , address:{egypt , saudi , emirates } } ,  city = "alexandria "} = realWorldUser ;
 
console.log(`Hello ${name} , ${email} , ${egypt} , ${saudi} , ${emirates} `) // NOW can use every  variable seperatly .


// destructring with arrays 

 const colors = ["red" , "green" , "blue ", "Yellow"];

//// **Professional Way:** We can skip items using commas, or collect the rest.
 const [primarColor,,,FavColor] = colors;
 console.log(primarColor) // red
 console.log(FavColor) // Yellow


 // Spread operator (...) Expanding / copying data

 const oldSkills = ["HTML","CSS","JS BASICS"];
 const newSkills =["React" ,"Next" ,"Typescript"];
  const allSkills = [...oldSkills , ...newSkills , "Tailwind"] // now 2arr in one array using ...

  // the same in objects 
    const product = {name : "mouse " , price : 300};
    const ProductWithDetails = {...product , color : "Balck"};
    const ProductWithDetails1 = {...product , price : 500}; 
     // here the current price prop and his value will be override over the real value 

    console.log(ProductWithDetails);




    // rest paramters (...) Collecting the Arguments 
         function calcTotal (prefix , ...numArry)
         {
              const total = numArry.reduce((acc , curr) => acc + curr , 0);
              return `${prefix} : ${total} `;
         } 
       
         const finalBill = calcTotal("Total Inventry Value",50,50,60,70,80)
         console.log(finalBill) // "Total Inventry Value" 310 