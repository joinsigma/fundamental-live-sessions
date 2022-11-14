let array1 = [1,2,3,4,5]

// let array2 = array1

let array2 = [...array1]
array2.fill(0)

console.log("Array 1 : ", array1)
console.log("Array 2 : ", array2)


// Objects

function getObject() {
    let key = "value"

    return {}
}