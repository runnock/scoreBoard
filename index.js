
let homeScore = document.getElementById("home-score")
homeScore.textContent = 0
let num = parseInt(homeScore.textContent) 

let guestScore = document.getElementById("guest-score")
guestScore.textContent = 0
let gNum = parseInt(guestScore.textContent)

let homeFoul = document.getElementById("home-foul")
homeFoul.textContent = 0
let homeFoulNum = parseInt(homeFoul.textContent)

let guestFoul = document.getElementById("guest-foul")
guestFoul.textContent = 0
let guestFoulNum = parseInt(guestFoul.textContent)


function add1H() {
   num += 1
   homeScore.textContent = num
}

function add2H() {
    num += 2
    homeScore.textContent = num
}

function add3H() { 
    num += 3
    homeScore.textContent = num
}
    
function add1G() {
    gNum += 1
    guestScore.textContent = gNum
}

function add2G() {
    gNum += 2
    guestScore.textContent = gNum
}

function add3G() {
    gNum +=3
    guestScore.textContent = gNum
}


function newGame() {
    num = 0
    gNum = 0
    homeScore.textContent = 0 
    guestScore.textContent = 0
    homeFoulNum = 0
    homeFoul.textContent = 0
    guestFoulNum = 0
    guestFoul.textContent = 0
}

function homeFoulBtn() {
    homeFoulNum += 1
    homeFoul.textContent = homeFoulNum
}

function guestFoulBtn() {
    guestFoulNum += 1
    guestFoul.textContent = guestFoulNum 
}