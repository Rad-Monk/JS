let a = 300

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(`inside block: ${a} ${b} ${c}`); // inside block: 10 20 30
}

console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
console.log(c); // 30   