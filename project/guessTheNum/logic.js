let rand =   parseInt(Math.random() * 100 + 1);

const sub = document.querySelector('#subt')
const inp = document.getElementById('guessField')
const guess = document.getElementsByClassName('guesses')
const lastR = document.getElementsByClassName('lastResult')
const hilow = document.getElementsByClassName('lowOrHi')
const start = document.querySelector('.resultParas')
const p = document.createElement('p')


let prevG = []
let numGuess = 1

let playGame = true

const valid = (g)=>{
    if(isNaN(g)){
        alert('PLEASE ENTER A VALID NUMBER')
    }
    else if(g < 1 || g > 100){
        alert('PLEASE ENTER A NUMBER BETWEEN 0 TO 100')
    }
    else{
        prevG.push(g)
        if(numGuess === 11){
            displayGuess(g)
            displayMsg(`GAME OVER !!! RANDOM NUMBER WAS ${rand}`)
            endGm()
        }
        else{
            displayGuess(g)
            check(g)
        }
    }

}

const check = (g)=>{
    if(g === rand){
        displayMsg(` YOU GOT IT `)
        endGm()
    }else if(g < rand){
        displayMsg(`GUESSED NUMBER IS TOOOOO LOW !`)
        
    }else{
        displayMsg(`GUESSED NUMBER IS TOOOOO HIGH !`)

    }
}

const displayGuess = (g)=>{
    inp.value = ``
    guess[0].innerHTML += `${g}, `
    numGuess++;
    lastR[0].innerHTML = `${11 - numGuess}`
}

const displayMsg = (g)=>{
    hilow[0].innerHTML = `<h2>${g}</h2>`
}

const newGm = (g)=>{
    const stbtn = document.querySelector('#newGame')
    stbtn.querySelector('#newGame')
    stbtn.addEventListener('click',(e)=>{
        rand = parseInt(Math.random() * 100 + 1)
        prevG = []
        numGuess = 1
        guess[0].innerHTML = ''
        inp.removeAttribute('disabled')
        start.removeChild(p)
        lastR[0].innerHTML = `${11 - numGuess}`
        playGame = true
    })

}

const endGm = (g)=>{
    inp.value = ``
    inp.setAttribute('desabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame" , type ='button'>START A NEW GAME</h2>`
    start.appendChild(p)
    playGame = false
    newGm()
}

if(playGame){
    sub.addEventListener('click',function(e){
        e.preventDefault()
        const guessed = parseInt(inp.value)
        valid(guessed)
    })
}