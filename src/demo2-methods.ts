

function add(a:number, b: number):number{
    return a+b
}


function areaOfCircle(radius: number):number{
    return 3.14 * radius * radius
}

//Named Parameters

function addMe({num1, num2}: {num1: number, num2: number})
{
    return num1 + num2
}

let result = add(5,10)
console.log("Addition: " +  result)

let area = areaOfCircle(5)
console.log("Area of Circle: " +  area)

console.log(addMe({num1:5, num2: 10}))
