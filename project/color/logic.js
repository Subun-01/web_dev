const b = document.querySelectorAll(".button")
const body = document.querySelector("body")

console.log(b);
b.forEach((butto)=>{
    console.log(butto);
    butto.addEventListener('click',(eobject)=>{
        body.style.backgroundColor = eobject.target.id
    })
})