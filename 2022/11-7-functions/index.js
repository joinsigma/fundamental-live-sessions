// Functions

// Declared function
function sum1(a,b) {
    let number1 = a
    let number2 = b
    return number1 + number2
}

// Anonymous function
const sum2 = function (a,b) {
    return a + b
}

// Arrow function
const sum3 = (a,b) => {
    console.log(a+b)
    return a + b // VOID
}

// console.log("output : ", sum3("My name is ","Danish"))

// To check variable types :: typeof <variablename> == <type>
function sum4(num1, num2){
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        return (num1 + num2)
    }

    // void
}


const arr = [1,2,3,4,5]
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log("forEach Calls")

// forEach with arrow function
// arr.forEach((value) => {
//     console.log(value)
// })


// Try doing with anonymous functions
// arr.forEach(function (value) {
//     console.log(value)
// })

function forEach(array, func) {
    console.log("My own forEach")
    for(let i = 0; i < array.length; i++) {
        func(array[i])
    }
}

// forEach(arr, function (value){
//     console.log(value)
// })

// Challenge : given an array of numbers [1,3,2,9,6], return the maximum number in the array

// Find max value
function max(){
    const array=[1,3,2,9,6]
    let maximum = -Infinity
    for (let i=0; i<array.length;i++){

        if(array[i] > maximum){
            maximum = array[i]
        }

    }

    return maximum
}

// Find minimum val
function min(){
    const array=[1,3,2,9,6]
    let minimum = +Infinity
    for (let i=0; i<array.length;i++){

        if(array[i] < minimum){
            minimum = array[i]
        }

    }

    return minimum
}

console.log(Max())