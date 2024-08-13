let a = 300

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log(`inside block: ${a} ${b} ${c}`); // inside block: 10 20 30
}
// 
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30   

function one(){
    let username = "John"
    function two(){
        let website = "www.google.com"
        console.log(username)
    }
    // console.log(website) // ReferenceError: website is not defined
    two()
}
one() // John

if(true){
    const user = "Rad"
    if(username=== "Rad"){
        const name = "monk"
        console.log(user + name)
    }
    // console.log(website) // ReferenceError: website is not defined
}
// console.log(user) // ReferenceError: user is not defined

addone(5) // 6
function addone(num){
    return num + 1
}
addone(5) // 6

// addtwo(5) // ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2
}
addtwo(5) // 7