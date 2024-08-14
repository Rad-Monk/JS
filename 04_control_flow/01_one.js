a = 10;
b = 20;
//if
if (a > b) {
    console.log('a is greater than b');
}

if (2 == "2") {
    console.log("executed");
}

if (2 === "2") {
    console.log("executedexecuted");
}


//if else
if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('b is greater than a');
}


//if else if
if (a > b) {
    console.log('a is greater than b');
}
else if (a < b) {
    console.log('a is less than b');
}
else {
    console.log('a is equal to b');
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard) console.log("You can make a purchase");
if (loggedInFromEmail || loggedInFromGoogle) console.log("You are logged in");