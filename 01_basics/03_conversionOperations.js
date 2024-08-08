let score = "33.33"
// console.log(typeof score) // string

let scoreNumber = Number(score) /* even if the value is not a number, it will still convert it to number,
                                 giving a false value, NaN */
// console.log(typeof scoreNumber) // number
// console.log(scoreNumber) // prints 0 for null and false, 1 for true, and NaN for everything not a number
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn) // boolean
// console.log(booleanIsLoggedIn) // true

// 1 => true
// 0 => false
// NaN => false
// null => false
// undefined => false
// "" => false
// "abc" => true


let number = true
let stringNumber = String(number)
// console.log(typeof stringNumber) // string
// console.log(stringNumber) // "33"

// true => "true"
// false => "false"
// 1 => "1"
// 0 => "0"
// NaN => "NaN"
// null => "null"
// undefined => "undefined"
// "" => ""

// ******************************************* O P E R A T I O N S ****************************************

let value = 3
let negvalue = -value
// console.log(negvalue)

// console.log(2+2) // 4
// console.log(2-2) // 0
// console.log(2*2) // 4
// console.log(2/2) // 1
// console.log(3%2) // 1
// console.log( 2 ** 3) // 2^3 = 8

let s1 = "Rad "
let s2 = "and "
let s3 = "Eve <3"
// console.log(s1+s2+s3)

// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log(1 + 2) // 3
// console.log("1" + "2") // 12
// console.log(2+2+"1") // 41
// console.log("1"+2+2) // 122

// console.log(true)
// console.log(+true)
// console.log(+"")
// console.log(+null)
// console.log(+undefined)
// console.log(+NaN)
// console.log(+0)
// console.log(+1)

let gameCounter = 5
console.log(++gameCounter)
console.log(gameCounter++)
console.log(gameCounter)
