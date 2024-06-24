const usr = {
    usrname: "tony",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.usrname} , welcome to website`);
        console.log(this);
    }
}

// usr.welcomeMessage()
// usr.usrname = "sam"
// usr.welcomeMessage()


// console.log(this);
// function tony(){
//     console.log(this);
// }

// tony()

//----------------ARROW FUNC. -------------------//

const tony = () => {
    let usrname = "tony"
    console.log(this.usrname)
}

// tony()

// const addTwo = (n1,n2) => {
//     return n1 + n2
// }

const addTwo = (n1,n2) =>  (n1 + n2)

console.log(addTwo(6,9));