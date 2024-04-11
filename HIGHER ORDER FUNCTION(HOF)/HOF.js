// A function which accept another function as an arguement is called Higher Order Function(HOF)


function fun(x , funk)
{
    console.log(x);

    // to see what exactly funk variable is carrying we can print the value ---> [Function : exp]
    console.log(funk);
    funk();
}


fun(10 , function exp()
{
    console.log("I am Arguement wala Function");
});