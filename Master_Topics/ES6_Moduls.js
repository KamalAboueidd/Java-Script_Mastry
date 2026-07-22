  // Default export ....;
  // js file export one thing only
  // use : api file 
  // adv : when import can named as you like 

import { use } from "react";

  const userKamal = {
     name : "kamal",
     age : 22 ,
     Job : "Sw engineer",
     salary : 10000
  }
  export default userKamal; // We can export anything directly (object, function, etc.)
  // in  onther file 
  //   import userKamal from "../.."
//   const {name , age , job , salary} = userKamal ;

//   const updatedUserKamal = {...userKamal , salary : salary + 500};


// A. Exporting a helper function
export const formatCurrency = (amount) => { // فانكشنز هستخدمها ف فايز تاني تعملي حاجه معيني يعني
    // Basic formatting helper
    return `$${amount.toFixed(2)}`;
};

// B. Exporting another helper function
export const calculateTax = (price, taxRate = 0.1) => {
    // Calculates tax, defaults to 10%
    return price * taxRate;
};

// C. Exporting a constant value
export const MAX_USER_LIMIT = 500;

const salaryFormatted = formatCurrency(updatedUserKamal.salary); // Calls helper from utilities.js
const totalTaxOnNewSalary = calculateTax(updatedUserKamal.salary);