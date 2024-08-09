const marvel_heroes = ['iron man', 'spider man', 'deadpool']
const dc_heroes = ['batman', 'superman', 'flash']

// marvel_heroes.push(dc_heroes) // this will consider dc array as an element of an array instead of another array entirely, making dc the 3rd element,
                                // affecting the original array

// console.log(marvel_heroes) // ['iron man','spider man','deadpool',[ 'batman', 'superman', 'flash' ]]

// heroes = marvel_heroes.concat(dc_heroes) // this will concatenate the two arrays into a new array, not affecting the original arrays
// console.log(heroes) // [ 'iron man', 'spider man', 'deadpool', 'batman', 'superman', 'flash' ]

// const heroes = [...marvel_heroes, ...dc_heroes] // this will concatenate the two arrays into a new array, not affecting the original arrays
// console.log(heroes) // [ 'iron man', 'spider man', 'deadpool', 'batman', 'superman', 'flash' ]

const arr = [1,2,3,[4,5,6], 7, [6,7,[4,5]]] // this some bullshit, but it's nested, below is how to spread it
const real_arr = arr.flat(Infinity) // inifinity means it will flatten all nested arrays
// console.log(real_arr) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] 

console.log(Array.isArray("Rad")) // returns false, true if it's an array
console.log(Array.from("Rad")) // converts string to array, ['R', 'a', 'd']
console.log(Array.from({name: "Rad", age: 23})) // converts object to array, [{}], will return empty array because we didn't specify how it should form an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // creates an array frin tge given elements