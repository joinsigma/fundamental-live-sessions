// Hi everyone! Object Oriented Programming (OOP)

// This file will demonstrate on how classes are made in Javascript

// Create a simple class
class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }

    getCarName() {
        return this.brand + this.model
    }
}

// Instantiate a class
const car1 = new Car("Honda","Civic")

// Call a function in the class
console.log(car1.getCarName())

// Task 1 : Create a "Square" class that has a function to return it's parameter and area
class Square {
    constructor(side) {
        this.side = side
    }

    // Getter function
    getParameter(){
        return this.side * 4
    }

    getArea(){
        return this.side * this.side
    }

    // Task 3 : Create a function in Square that allows you to update or modify side (Setter function)
    setSide(newSide){
        this.side = newSide
    }
}

const LargeSquare = new Square(50)

console.log(LargeSquare.getParameter())
console.log(LargeSquare.getArea())

LargeSquare.setSide(100)

console.log(LargeSquare.getParameter())
console.log(LargeSquare.getArea())

// Task 2 : Create an Animal, Weather and Tree class in a different file and import them
// import { Animal } from "./classes/Animal"
// import { Tree } from "./classes/Tree"
// import { Weather } from "./classes/Weather"

// const animal1 = new Animal("monkey")
// const animal2 = new Animal("parrot")
// const animal3 = new Animal("weasel")
