#!  /usr/bin/env node
// new data object
const date_ob = new Date();
// current data
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);
// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
let year = date_ob.getFullYear();
// current hours
let hours = date_ob.getHours();
//  current minutes
let minutes = date_ob.getMinutes();
// current seconds
let seconds = date_ob.getSeconds();
// print date & time yyyy-mm-dd format
console.log(year + "-" + month + "-" + date);
// print date and time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
// print time in HH:MM format
console.log(hours + ":" + minutes);
let ts = Date.now();
// timestamp in milliseconds
console.log(ts);
// timestamp in seconds
console.log(Math.floor(ts / 1000));
// current timestamp in milliseconds
let Ts = Date.now();
let data_ob = new Date(Ts);
let data = data_ob.getDate();
let Month = data_ob.getMonth();
let Year = data_ob.getFullYear();
// print date and time in yyyy-mm-dd format
console.log(Year + "-" + Month + "-" + data);
export {};
