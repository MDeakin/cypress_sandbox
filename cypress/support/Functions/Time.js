//Functions to handle time / timestamps / etc.

//What time is it?
timestamp = Date.now()
console.log(timestamp)

//What day is it?
var date = new Date(timestamp).toLocaleDateString("en-US")
console.log(date)

//What time is it?
var time = new Date(timestamp).toLocaleTimeString("en-US")
console.log(time)
