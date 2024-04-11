const users = [
    {firstName : "Mayank" , LastName : "Deep" , Age : 26},
    {firstName : "Rohal" , LastName : "Kaul" , Age : 29},
    {firstName : "Pragya" , LastName : "Kumari" , Age : 21}
]



// Q.  we need to print the first and last name only 

// we will have to use map function because it iterated with a specific function and creates a new array array


// let data = users.map((element) => element.firstName + " " +  element.LastName);

// let data = users.map(function (element){
//     return element.firstName + " " + element.LastName;
// });

// console.log(data);


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



// const users1 = [
//     {firstName : "Mayank" , LastName : "Deep" , Age : 26},
//     {firstName : "Rohal" , LastName : "Kaul" , Age : 29},
//     {firstName : "Pragya" , LastName : "Kumari" , Age : 21},
//     {firstName : "Pragya" , LastName : "Kumari" , Age : 26},
//     {firstName : "Pragya" , LastName : "Kumari" , Age : 21}
// ]

/*
    find out how many people of different ages are present

    ex { 26 : 2 , 29 : 1 , 21 : 2  }
*/


// let data = users1.reduce(function (acc , curr) {

//     if(acc[curr.Age])
//     {
//         acc[curr.Age] = ++ acc[curr.Age];
//     }
//     else 
//     {
//         acc[curr.Age] = 1;
//     }

//     return acc;
// } , {});

// console.log(data);



// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


const users2 = [
    {firstName : "Mayank" , LastName : "Deep" , Age : 26},
    {firstName : "Rohal" , LastName : "Kaul" , Age : 29},
    {firstName : "Pragya" , LastName : "Kumari" , Age : 90},
    {firstName : "Pragya" , LastName : "Kumari" , Age : 36},
    {firstName : "Pragya" , LastName : "Kumari" , Age : 21}
]


// q3 FIRST NAME OF ALL THE PEOPLE WHOSE AGE IS LESS THAN 30 YEARS

        // type 1

// let data = users2.filter(function (element){
//         if(element.Age < 30)
//         {
//             return true;
//         }
// });

// output till now
/*  
[
    { firstName: 'Mayank', LastName: 'Deep', Age: 26 }, 
    { firstName: 'Rohal', LastName: 'Kaul', Age: 29 },  
    { firstName: 'Pragya', LastName: 'Kumari', Age: 21 }
]
*/

// let data2 = data.map(function (element){
//     return element.firstName;
// });

// console.log(data2);

// final op 
// [ 'Mayank', 'Rohal', 'Pragya' ]




        // type 2 


// let data1 = users2.filter( (element) => (element.Age < 30)).map( (element) => (element.firstName));  


// console.log(data1);




// q4 do the same thing usonh reduce function 


const users3 = [
    {firstName : "Mayank" , LastName : "Deep" , Age : 26},
    {firstName : "Rohal" , LastName : "Kaul" , Age : 29},
    {firstName : "Pragya" , LastName : "Kumari" , Age : 90},
    {firstName : "Pragya" , LastName : "Kumari" , Age : 36},
    {firstName : "Pragya" , LastName : "Kumari" , Age : 21}
]


const data3 = users3.reduce(function(acc, curr){
    if (curr.Age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, [])



console.log(data3);