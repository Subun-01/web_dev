const tinderUsr={}

tinderUsr.id = "318"
tinderUsr.name="sonu"
tinderUsr.mail="sonu@mail"

const regularUsr={
    mail:"mail@mail",
    fullname:{
        usrFullName:{
            firstname:"ram",
            lastname:"dash"
        }
    }
}

// console.log(regularUsr.fullname.usrFullName.lastname);

const obj1={name:"ram",isgood:false}
const obj2={3:"122CS",4:true}
const obj4={1:7,2:"g"}

// const obj3= {obj1,obj2}
// console.log(obj3);

// let obj3= Object.assign(obj1,obj2)
// console.log(obj3);
// obj3= Object.assign({},obj3,obj4)
// console.log(obj3);

const obj3={...obj4,...obj1,...obj2}
// console.log(obj3);

const usr=[
    {
        id:1,
        name:"ram"
    },
    {
        id:2,
        name:"sam"
    },
    {
        id:3,
        name:"jam"
    },
]

// console.log(tinderUsr);
// console.log(Object.keys(tinderUsr));
// console.log(Object.values(tinderUsr));
// console.log(Object.entries(tinderUsr));

// console.log(tinderUsr.hasOwnProperty("fullname"));
// console.log(tinderUsr.hasOwnProperty("name"));



