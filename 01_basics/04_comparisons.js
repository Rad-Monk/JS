console.log(1 == 1) // true
console.log(1 == "1") // true
console.log(2>1) //true
console.log(2 >= 1) //true
console.log( 2 < 1) //false
console.log( 2<= 1) //false


console.log(null > 0) // false
console.log(null == 0) //false
console.log(null >= 0) //true, this is true because equity check and comparison work differently, comparision converts null to 0 and then compares

console.log(undefined > 0 ) //false
console.log(undefined >= 0 ) //false
console.log(undefined == 0 ) //false

// double equal and triple equal are different tf???
// they are different as === also checks for same datatype :)
console.log('1'===1) //false