                // MAP FUNCTION IS UDES TO TRANSFORM THE ARRAY ACCORDING TO THE REQUIREMENT 
                // MAP FUNCTION CREATED A NEW ARRAY FULFILLING THE REQUIREMENT

let arr = [5,  6, 2 , 9];

// DOUBLE [10 , 12 , 2 , 18]

//triple and so on....

// let doubled = arr.map(function (element){
//     return element * 2;
// });

// console.log(doubled);


                    // another syntax is 


function double(x)
{
    return x * 2;
}

let storage = arr.map(double);

console.log(storage);


                // another synatax will be arrow function wala 