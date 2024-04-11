// as the name suggest --> it's the default parameter that will be passed if the function lacks certain parameters


function add(a , b = 1) 
{
    debugger;
    console.log(a + b);
}


// add(2 , 4);       // in this case , value of b inside add function will be replaced


// add(2);            // in this case the value of b will be equal to 1 

// add(2 , NaN);     // b will take NaN as value

// add(2 , "");        // b will take "" as value 

// add(3 , undefined);        // but at the case of undefined function will take it as no value was passed and will assign b = 1




                    // ONE OF MANY USE CASE 
                    // MAKE A FUNCTION THAT ROLLS A DICE --> DICE SIDES SHOULD BE ENTERED BY THE USER.   IF USER DON'T ENTER THE DICE SIDE THEN IT SHOULD BE OF 6 SIDES BY DEFAULT



function rollDice(diceSize = 6)
{
    debugger;
    console.log( (Math.floor(Math.random() * diceSize) + 1));
}

rollDice();