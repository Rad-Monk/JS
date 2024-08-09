const num = 303
// console.log(num)

const num2 = new Number(303)
// console.log(num2)

// console.log(num2.toString()) // converts the number to string
// console.log(num2.toFixed(2)) // removes or adds as many decimals as given in brackets

const num3 = new Number(30.5463) 
// console.log(num3.toPrecision(3)) // only gives as many digits as given here overall, pretty confusing but ok

const hundreds = 10000000000
// console.log(hundreds.toLocaleString('en-IN'))

///////////////////////////////////////////// M A T H S /////////////////////////////////////////

// console.log(Math.E) // returns Euler's number
// console.log(Math.PI) // returns the value of PI
// console.log(Math.abs(-5)) // returns the absolute value of a number
// console.log(Math.pow(2, 3)) // returns the result of raising a number to a power
// console.log(Math.sqrt(25)) // returns the square root of a number
// console.log(Math.floor(3.8)) // returns the largest integer less than or equal to a given number
// console.log(Math.ceil(3.2)) // returns the smallest integer greater than or equal to a given number
// console.log(Math.round(3.5)) // returns the value of a number rounded to the nearest integer


console.log(Math.random()) // returns a random number between 0 and 1
console.log(Math.floor((Math.random() * 10) + 1)) // returns a random number between 1 and 10

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // returns a random number between min and max, inclusive