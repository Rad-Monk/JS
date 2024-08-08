// Primitive: all of these are call by value, meaning we don't get the original value when we try to access it, we get the
            // the copied value

// 7 types:
// Strings, Number, Boolean, null, undefined, BigInt, Symbol

const score = 33.33 // Number
const name = "Rad" // String
const isLoggedIn = true // Boolean
const age = null // null
let address // undefined
const bigNumber = 1234567890123456789012345678901234567890n // BigInt
const symbol = Symbol("symbol") // Symbol
const symbol2 = Symbol("symbol") // Symbol

console.log(symbol===symbol2) // number

// Reference type or Non-Primitive, 
// types:
// Array, Objects, Functions

const dumb = ["Rad", "Eve", "Crimson"] // Array
const person = {name: "Rad", age: 21} // Object

const myFunction= function greet(name){
    console.log("Hello "+name)
}

