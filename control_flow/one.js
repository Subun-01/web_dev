// if

const isUserLoggedIn = true

// if(isUserLoggedIn){
    
// }


// switch
let key = 1
switch (key) {
    case 10:
        console.log("exectued");
        break;

    default:
        console.log("default");
        break;
}


// false value = false, 0, -0, "", Nan, undefined
// true value = true, "0", " ", 'false', "true"

// for array
mail=[]
if(mail.length===0){
    console.log("empty");
}
const obj={}

if(Object.keys(obj).length===0){
    console.log("object is empty");
}


//NULLISH COALESCING OPERATOR (??): null undefined

// const foo = null ?? 'default string';
// console.log(foo);
// // Expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// // Expected output: 0


// TERNARY OPERATOR

const a=100
a>500 ? console.log("true"):console.log("false");
