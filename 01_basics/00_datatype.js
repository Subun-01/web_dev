// Primitive

// 7 types: String, Number , Boolean, null, undefined,Symbol, BigInt



// reference (non primitive)

// Array , object ,function

/* const arr = ["fox","frog","fungus"]
console.log(arr[0]);

let obj ={
    name:"subun",
    age:"12"
}
console.log(obj.name);
*/
// |||||||||||||||||||

// stack (primitive),heap (non primitive)

// let myName="subun"
// let notMyName=myName
// notMyName="subun2"
//  console.log(myName);
//  console.log(notMyName); 

let usr = {
    name:"ram",
    upi:"456@ibl"
}
let usrTwo = usr
console.log(usr);
console.log(usrTwo);
usrTwo.name="subun"
console.log(usr);
console.log(usrTwo);