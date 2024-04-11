// calculate the total price of the cart array 

// function totalPrice(prevTotal , currValue)
// {
//     let totalvalue = prevTotal.price + currValue.price;

//     return {price : totalvalue};
// }

// const cart = [{price : 100000 , name : "I-Phone"}, {price : 200 , name : "Tempered Glass"} , {price : 500 , name : "Backcover"}];

// const total = cart.reduce(totalPrice);

// console.log(total.price);




            // FIND THE MAXIMUM ELEMENT IN AN ARRAY 


let arr = [2 , 5 , 6, 23 , 110 , -1, 34 , 35 , 22 ,90]


// let maxi = arr.reduce(function(max , curr){
//     if(max < curr)
//     {
//         max = curr;
//     }

//     return max;
// } , 0);

// console.log(maxi);


// let res = arr.filter( (element) => element % 2 == 0);

// console.log(res);


let objArr = [

    {name : "Mayank" , position : "SDE 1" , PayScale : 120000} , 
    {name : "Vishal" , position : "Tester" , PayScale : 40000} , 
    {name : "Nikhil" , position : "SRE" , PayScale : 110000}
];


objArr = objArr.filter( (scale) => scale.PayScale > 40000);

console.log(objArr);