// console.log("I")
// console.log("R")
// console.log("O")
// console.log("N")

const a=function sayName(){
    console.log("I")
    console.log("R")
    console.log("O")
    console.log("N")
}

function add(num1,num2){
    console.log(num1+num2)
}

// add(6,5)

function addTwo(num1,num2){
    return(num1+num2)
}

// console.log(addTwo(6,5))

function loginDone(...usr){ //rest/spread operator operator ...
    if(usr===undefined){
        console.log("Please re-enter");
        return
    }
    return `hey ${usr} !! have a nice day`
}

// console.log(loginDone("Subun"))
// console.log(loginDone("Subun","Tony","Gordan"))

const usr = {
    usrname: "tony",
    price: 199
}
 
function handleObject(anyObj){
    console.log(`Username is ${anyObj.usrname} and price is ${anyObj.price}`);
}
handleObject(usr)
