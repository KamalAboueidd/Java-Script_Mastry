

function one ()
{
     var place ;
     console.log(`store is ${place}`)
}
function two ()
{
     var place = "two";
     console.log(`store is ${place}`)
     one();

}
    var place = "three" ;
    console.log(`store is ${place}`)
    two();