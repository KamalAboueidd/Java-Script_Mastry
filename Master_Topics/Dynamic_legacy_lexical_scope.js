
var cityName = "Global Cairo"; // Global variable
  // lexical global scope

function globalFunction() {
    var cityName = "Outer Alexandria";
  // lexical "globalFunction" scope 
    function inerFunction() {
         // lexical " inerFunction" scope 
        var cityName = "Inner Mansoura";
 
        console.log("1. Inside innerFunction:", cityName); // Output: " 1. Inside innerFunction: Inner Mansoura"

        function deepNestedFunction() {
         
             // lexical deepNestedFunction scope 
            console.log("2. Inside deepNestedFunction:", cityName);  // Output : " 2. Inside deepNestedFunction: Inner Mansoura"
        
        }
        deepNestedFunction();
    }
    inerFunction();
}
globalFunction();
// global lexical scope
        // globalFunction lexical scope 
             // inerFunction lexical scope 
                 // deepNestedFunction lexical scope 
          
//    زي حلقه وصل بالملي انت  ببتطلب تنفذ طباعه حاجه معينه ف فانكشن معينه ولككن بصي تفالفانكشتن مش لاقيه ابتروح تشوف بقا الحاجه دي موجود ف الاوتر ريفرينس ولو موجوده تنفذها عادي خالص فهمت ؟ لغايه ما توصل ل الجلوبل ليسكيال سكوب  تمام ؟ \

  // dynamic scope 
const hotel = {
    name: "Luxury Hotel",
    welcome: function() {
        console.log(`Welcome to ${this.name}`);  // هنا عادي هتجيب النيم دا من الاوبجيكتاللي هيا فيه مش الزيز  هنا بتشير للاوبجيكت هوتل اعه طب والهوتر مش جواه خاصيه اسمها نيم ؟ اه يبقا تمام 
      var Hotall = function ()
       {
         console.log(this)  // " Window " not hotal obj !! طبيعي لان الفانكشن دي جوا فانكشن تانيه مش جوا الاوبجيكت نفسه ؟  نحل ده ازاي ؟ طيب 
       }
       Hotall()
    }
}; 


const hotel = {
    name: "Luxury Hotel",
    welcome: function() {
        console.log(`Welcome to ${this.name}`); 
      var Hotall = () => 
       {
         console.log(this)  //  "hotel obj"  الاروو فانكشن اجبرت الزيز انها تبقا ليكسيكال سكوب مش داينميك ورااحت جابت قيمه الزيز من الفانكشن اللي هيا جواها بس كدا واضحه ؟ 
       }
       Hotall()
    }
};
const hotel = {
    name: "Luxury Hotel",
    welcome: function() {
        console.log(`Welcome to ${this.name}`); 
         var legacy = this;
      var Hotall = function ()
       {
         console.log(legacy)  //  "hotel obj" لاني خزنت قيمه الزيز ف متغير واستخدمتها جوا الفانكشن دي ودا مش الافضل عموما 
       }
       Hotall()
    }
};
   

const restaurant = {
    name: "Gourmet Restaurant"
   
};

hotel.welcome();


