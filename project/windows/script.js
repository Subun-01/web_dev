let tas = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("start")[0]

tas.addEventListener("click",() => {
    if(startmenu.style.bottom == '50px'){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})