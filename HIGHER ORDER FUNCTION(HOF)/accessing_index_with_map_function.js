const arr = [23 , 12 , 45 , 9 , 78];

function funk(element , indx)
{
    return `Element at index ${indx} is ${element}`;
}

const result = arr.map(funk);

console.log(result);