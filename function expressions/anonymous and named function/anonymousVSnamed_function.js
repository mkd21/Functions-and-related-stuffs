function fun(func)
{
    console.log("Main function body executed");
    func();
}

            // readability is compromised in using anonymous function

// fun(function()
// {
//     console.log("Arguement function body executed");
// });


        // no issue of readability as everything is mentioned about the working of the funtion

fun(function arguement ()
{
    console.log("Arguement function body executed");
});