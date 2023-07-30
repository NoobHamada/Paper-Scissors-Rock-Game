let div = document.querySelectorAll('div')
let pcChoices = ['scissors', 'paper', 'rock']
let result = document.getElementById('result')

div.forEach((element) => {
    element.addEventListener('click', function () {
        let pcChoice = pcChoices[Math.trunc(Math.random() * 3)]
        rps(this.innerText, pcChoice)
    })
})

const rps = (p1, p2) => {
    var rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }
    
    if (p1 == p2) {
        result.innerText = 'Pc Chose "' + p2 + '" Draw'
    } else if (p2 === rules[p1]) {
        result.innerText = 'Pc Chose "' + p2 + '" You Won'
    } else {
        result.innerText = 'Pc Chose "' + p2 + '" You Lost'
    }
};