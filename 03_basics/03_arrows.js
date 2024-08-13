const user = {
    username : "Rad",
    price : 99,
    getName: function(){
        // console.log(this.username)
        // console.log(this)
    }
}

user.getName() // Rad
user.username = "eve"
user.getName() // eve
// console.log(this)

function context(){
    const username =  "Rad"
    console.log(this)
}
// context() // window

const add = (a,b) => {
    console.log(this)
    return a + b
}
// add(1,2) // window

const add2 = (a,b) => a+b
add2(1,2) // 3


function greet1(cb){
    cb()
}
const user1 = {
    username: "Rad",
    hello: function(){console.log(`hello  ${this.username}`)}, // hello Rad
    arrowHello: () => {console.log(`hello ${this.username}`)}, // hello undefined
}
greet1(user1.hello.bind(user1)) // hello Rad
greet1(user1.hello) // hello undefined
greet1(user1.arrowHello) // hello undefined


function callback(cb){
    console.log(`i come here first`)
    cb()
    console.log(`i come here third`)
}
function toExecute(){
    console.log(`i come here second`)
}

// callback(toExecute)

const arrowExecute = () => {
    console.log(`i come here second`)
}
// callback(arrowExecute)


const user2 = {
    username: "Eve",
    print: function(){
        setTimeout(function(){
            console.log(this.username)
        }, 1000)
    },
    print2: function(){
        setTimeout(() => {
            console.log(this.username)
        }, 1000)
    }
}

user2.print() // undefined
user2.print2() // Eve