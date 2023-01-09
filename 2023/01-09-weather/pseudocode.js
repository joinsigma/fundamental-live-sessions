// PSEUDOCODE OF FINDING THE MAX

/**
 * 1. Create a variable
 * 2. set variable with minimum value
 * 3. Loop around the array
 * 3a. If the current value more than the variable, replace the value in the variable.
 * 4. Once the loop ends, print out
 */

const array = [0, 1, 2, 3]

let maximum = -100
for (let i = 0; i < array.length; i++) {
    if (array[i] > maximum) {
        maximum = array[i]
    }
}

console.log(maximum)




