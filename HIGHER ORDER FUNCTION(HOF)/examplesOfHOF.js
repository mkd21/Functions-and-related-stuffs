// map function is an example of inbuilt HOF in JS 

function square(expression)
{
    return expression * expression;
}

function cube(x)
{
    return x * x * x;
}

const arr = [1,2,3,4,5];

const result = arr.map(square);
const Cuberesult = arr.map(cube);

console.log(result);
console.log(Cuberesult);