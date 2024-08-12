const user = new Object()
// console.log(user)

// const user1 = {}
// console.log(user1)

user.id = "123"
user.name = "Rad"
user.isLoggedIn = "False"

// console.log(user)

const user2 = {
    email: "radmonk@gmail.com",
    fullname: {
        first: "Rad",
        last: "Monk"
    },
    age: 21
    }

// console.log(user2.fullname.first)
// console.log(user2['fullname']['first'])

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d', 5:{6:'e', 7:'f'}}

const obj3 = {obj1, obj2}
// console.log(obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4)

const obj5 = Object.assign({}, obj1, obj2)
// console.log(obj5)

const users = [
    {
        id: 1,
        name: "Rad",
        age: 21
    },
    {
        id: 2,
        name: "Monk",
        age: 22
    }
]
// console.log(users[1].name)

// console.log(user)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


const course = {
    coursename: "JS",
    price:  '999',
    modules:{
        m1: "Basics",
        m2: "Advanced"   
    },
    instructor: "Rad Monk"
}

const {coursename: cname, price, modules: {m1, m2}, instructor} = course
// console.log(cname, price, m1, m2, instructor)


