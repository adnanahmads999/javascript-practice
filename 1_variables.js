const name= "windows"
var id= "windows@gmail.com"
let password= "54321"
accCity= "Lucknow"
let accState; //if it is not initialized then when it'll be printed, it'll show undefined

//const can not be changed

id= "network@gmail.com"
password="7896"
accCity= "Mumbai"

console.table([name, id, password, accCity]); //to display data in tabular form

// Prefer not to use var
// because of issue in block scope and functional scope