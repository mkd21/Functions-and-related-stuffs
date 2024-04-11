// function isEven(num)
// {
//     if(num % 2 == 0)
//     {
//         return true;
//     }
//     else 
//     {
//         return false;
//     }
// }


// let x = 3;

// if( isEven(x) == true )
// {
//     console.log(x,"is Even");
// }
// else 
// {
//     console.log(x, "is odd");
// }


function isEvenOdd(num)
{
    if(num % 2 == 0)
    {
        return "Even"
    }
    else 
    {
        return "Odd";
    }
}

let a = 12;
let b = 23;
let c = 46;

console.log("A is",isEvenOdd(a));
console.log("B is",isEvenOdd(b));
console.log("C is",isEvenOdd(c));