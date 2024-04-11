// ARGUEMENT KEYWORD IS BY DEFAULT PRESENT INSIDE A FUNCTION 

// it's seems like array like object 

function add(a , b)
{
    console.log(arguments);
    console.log(a + b);
}

// add();

// add(2 , 4);

// add(2 , 4 , 5 ,2, 1);       // although function will accept only two arguements but inside (arguements) all value will be visible


function sum()
{
    let sum = 0;
    console.log(arguments);

    for(let i in arguments)
    {
        sum += arguments[i];
    }

    return sum
}

// console.log(sum(1 , 2, 3, 4, 5 , 6));





            // NOTE POINT                    

            // AGRUMENTS KEYWORD DOES NOT WORK WITH ARROW FUNCTIONS 

            // TO SOLVE THIS ISSUE CONCEPT OF (REST PARAMENTS) CAME INTO PICTURE



// ques --> convert arguments keyword into array 

function helper(a , b)
{
    return a - b;
}

function convert()
{
    let arr = [];

    for(let i = 0; i < arguments.length; i++)
    {
        arr.push(arguments[i]);
    }

    console.log(arr);
    
    arr.sort(helper);
    console.log(arr);
}

convert(2 , 5 , 1 , 3 , 5 , 7 , 6);