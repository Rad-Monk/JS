const  arr = [1, 2, 3, 4, 5];
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(arr[0]); // 1

const arr2 = new Array(1, 2, 3, 4, 5);
// console.log(arr2); // [1, 2, 3, 4, 5]

arr2.push(6)
// console.log(arr2) // adds 6 to the end of an array

arr2.pop()
// console.log(arr2) // removes the last value in the array

arr2.unshift(9)
// console.log(arr2) // adds 9 at the start of an array

arr2.shift()
// console.log(arr2) // removes 9 from start of the array

// console.log(arr2.includes(3)) // returns true if 3 is in the array

// console.log(arr2.indexOf(3)) // returns the index of 3 in the array else returns -1

const arr3 = arr2.join()
// console.log(arr3) // converts array to string

console.log(arr2.slice(1, 3)) // returns a new array with values from index 1 to 3, inclusive and exclusive respectively

console.log(arr2.splice(1, 3)) // removes 2 values starting from index 1, returns the removed values modifying the original array