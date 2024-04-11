    /* SORT FUNCTION IN JS IS A HOF(HIGH ORDER FUNCTION) 
       which can accept function as an arguement

    */


const arr = [23 , 0 , 3 , 1 , 34 , 100 , 1000 , 45 , 50 , 9];

arr.sort(function (a , b)
{
    return a - b;
});


console.log(arr);

/**
 * REASON OF WORKING
 * 
 * if a < b and we do (a - b) then it will return -ve then in that case a is placed before b
 * 
 * if a > b and we do (a - b) then the result will be +ve then in that case b is placed before a
 */