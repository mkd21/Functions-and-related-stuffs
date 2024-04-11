/**
 * FILTER FUNCTION IS A HOF
 * IT IS SPECIAL BECAUSE IT ASPECT IT'S ARGUEMENT FUNCTION TO RETURN A BOOLEAN VALUE
 * 
 * if the value is not retrned in boolean then it coverts the value to boolean
 * 
 * 
 * this function iterates over each element and checks the returned value
 * 
 * ---> if value is true then it is added to the new array
 * ---> if value is false then it is not added to the new array
 * 
 *  as the name suggests ---> filter()
 */ 


const arr = [1,2,3,4,5,6,7,8,9,10];

// function oddEven(x)
// {
//     return (x % 2 == 0);
// }


// const ans = arr.filter(oddEven);

// console.log(ans);



//     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



// jo v value add krna hai bs uske liye true return krwa do, wo add ho jyega

// const storage = arr.filter((element) => {
//     if(element > 4 )
//     {
//         return false;
//     }
//     else 
//     {
//         return true;
//     }
// });

// console.log(storage);


            // TYPE 2 

// let num = arr.filter( (element) => (element > 4))
// console.log(num);


                // WORKING OF OBJECTS 

// const companies = [
//     {name : "Samsung" , category : "Product Based" , Location : "Noida"},
//     {name : "Amazon" , category : "Product Based" , Location : "Gurugram"},
//     {name : "Capgemini" , category : "Service Based" , Location : "Gurugram"},
//     {name : "Microsoft" , category : "Product Based" , Location : "Hyderabad"},
//     {name : "Coforge" , category : "Service Based" , Location : "Noida"},
//     {name : "Accenture" , category : "Service Based" , Location : "Hyderabad"}
// ]

// arguement is important because usse hi array element pr condition check hoga aur value add ya reject hoga

// const companyNames = companies.filter( function nameBased(company){
//     if(company.category === "Service Based")
//     {
//         return true;
//     }
// });


// console.log(companyNames);