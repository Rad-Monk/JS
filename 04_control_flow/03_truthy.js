const email = 'rad.com'
if (email) {
    console.log('email is truthy')
}
else {
    console.log('email is falsy')
}

// nullish coaelscing operator

const username = 'Rad' ?? 'Guest'
console.log(username)

const age = null ?? 25
const age2 = undefined ?? 25

console.log(age)
console.log(age2)

const user = null ?? undefined ?? "eve"
console.log(user)

// ternary operator
const userLoggedIn = true
const greeting = userLoggedIn ? 'Welcome back' : 'Welcome'