function whatMyName(name="FRIGHTENING"){
    return `My name is ${name}`
}
const name = whatMyName("THUNDER")
// console.log(name) // My name is THUNDER 


function cartItems(...items){
    return items
}
const items = cartItems("apple", "banana", "orange")
// console.log(items) // [ 'apple', 'banana', 'orange' ]   

obj={
    name: "apple",
    color: "red"
}
function handleObject(anyobj){
    return `This is a ${anyobj.name} and it is ${anyobj.color}`
}
console.log(handleObject(obj)) // This is a apple and it is red

function getArrayElement(array, index){
    return array[index]
}

const array = ["apple", "banana", "orange"]
console.log(getArrayElement(array, 1)) // banana