
function isPrimeOrNot(arg)
{
    for(let i = 2; i < arg; i++)
    {
        if(arg % i == 0)
        {
            return "Not Prime";
        }
    }

    return "Prime";
}

let num = 121;

console.log( num,"is",isPrimeOrNot(num) );