// Dates

let myDate =  "eve"
let date = new Date();
// console.log(date); // returns the current date and time
// console.log(date.toString()) // returns the date as a string
// console.log(date.toDateString()) // returns the date portion of a Date object in human-readable form
// console.log(date.toTimeString()) // returns the time portion of a Date object
// console.log(date.getFullYear()) // returns the year of a Date object
// console.log(date.toISOString()) // returns the date as a string, using the ISO standard
// console.log(date.toJSON()) // returns the date as a string, using the ISO standard
// console.log(date.toLocaleString()) // returns the date as a string, using the current locale

let createdDate = new Date(2030, 0, 1, 0, 0, 0, 0) // year, month, day, hour, minute, second, millisecond
// console.log(createdDate.toLocaleString()) // returns the date portion of a Date object in human-readable form

let Date_format_2 = new Date("2020-01-01") // year, month, day
// console.log(Date_format_2.toDateString()) 

let Date_format_3 = new Date("01-01-2025") // month, day, year
// console.log(Date_format_3.toDateString()) 

let timestamp = Date.now()
// console.log(timestamp) // returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

// console.log(Math.floor(Date.now()/1000)) // returns the number of seconds since January 1, 1970, 00:00:00 UTC    

let newDate = Date.now()
// console.log(newDate) // returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

console.log(new Date(newDate).toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}));