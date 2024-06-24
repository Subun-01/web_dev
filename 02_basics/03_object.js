//singleton
//--------------// Object.create

//object literals

const sym= Symbol("key")
const JsUsr = {
    "name":"ironman",
    "full name":"Tony Stark",
    4:"code",
    sym:"5000",
    [sym]:3000,
    age:50,
    location:"NY",
    isLog:true,
    login_day:[1,5,7]
}
// JsUsr.age=90
// console.log(JsUsr.age);


// Object.freeze(JsUsr)

// JsUsr.age=1000
// console.log(JsUsr.age);
// console.log(JsUsr["age"]);
// // console.log(JsUsr.fullname);  ******************
// console.log(JsUsr["full name"]);
// // console.log(JsUsr.4); ***************
// console.log(JsUsr["4"]);
// console.log(JsUsr.sym); // sym used as string without [] in object
// console.log(JsUsr[sym])

// console.log(JsUsr);

JsUsr.greeting = function(){
    console.log("Hello USR");
}
JsUsr.greetingTwo = function(){
    console.log(`Hello USR, ${this["full name"]}`);
}

console.log(JsUsr.greeting());
console.log(JsUsr.greetingTwo());
