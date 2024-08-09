// Singleton
// Object.create

// object literals
const user = {} // empty object
const mySym = Symbol("key")

const user1 = {
    [mySym]: "key",
    name: "Rad",
    "Full name": "Eve's husband", 
    age: 20,
    sex: "yes",
    wife: "Eve",
    fuck: ["yes",'yuh']
}

// console.log(user1.sex)
// console.log(user1["Full name"])
// console.log(typeof user1[mySym])

user1.age= 21
// console.log(user1.age)

// Object.freeze(user1)
user1.age = 12
// console.log(user1.age)

// console.log(user1)

user1.seggs = function(){
    console.log("FUCK YEA")
}

// console.log(user1)
console.log(user1.seggs())

user1.seggWith = function(){
    return `LET IT RIP ${this.wife.toUpperCase()}!`
}

console.log(user1.seggWith())