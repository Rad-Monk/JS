const name = "Rad"
const age = 20

console.log(`My name is ${name} and I am ${age} years old`) // My name is Rad and I am 20 years old
console.log(typeof name) // string

const wife  = new String("Eve")
console.log(wife.toUpperCase()) // [String: 'EVE']
console.log(typeof wife) // object
console.log(wife.__proto__) // [String: '']
console.log(wife[1]) // E


const bs = new String("Bullshit")
console.log(bs.substring(0, 4)) // Bull
console.log(bs.slice(-2, 4)) // ll


const trimbs = new String("  Bullshit  ")
console.log(trimbs)
console.log(trimbs.trim()) // Bullshit


const url = new String("https://www.rad%20and%20eve.com")
console.log(url.replace("%20", "")) // https://www.radandeve.com
console.log(url.includes("rad")) // true
console.log(url.split("/")) // [ 'https:', '', 'www.rad%20and%20eve.com' ]