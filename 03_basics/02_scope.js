let a = 500
const b = 500
var c = 500

if(true){
        let a = 200
        const b = 200
        var c = 200
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //it will execute normally

function addone(num){
    return num + 1
}


// console.log(addTwo(5))    //it won't execute because addTwo not declared yet

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))