function callInvoke() {
    console.log(`invoked`)
}
callInvoke();

(function ImmediateInvoke() {
    console.log(`immediate invoked`)
})(); // 2nd bracket is for invoking the function

(() => console.log(`immediate arrow invoked`))();

((name) => console.log(`immediate arrow invoked ${name}`))("Rad");

