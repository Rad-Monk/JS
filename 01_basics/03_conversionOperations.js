let score = "33.33"
console.log(typeof score) // string

let scoreNumber = Number(score) /* even if the value is not a number, it will still convert it to number,
                                 giving a false value, NaN */
console.log(typeof scoreNumber) // number
console.log(scoreNumber) // prints 0 for null and false, 1 for true, and NaN for everything not a number
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn) // boolean
console.log(booleanIsLoggedIn) // true

// 1 => true
// 0 => false
// NaN => false
// null => false
// undefined => false
// "" => false
// "abc" => true


let number = true
let stringNumber = String(number)
console.log(typeof stringNumber) // string
console.log(stringNumber) // "33"

// true => "true"
// false => "false"
// 1 => "1"
// 0 => "0"
// NaN => "NaN"
// null => "null"
// undefined => "undefined"
// "" => ""