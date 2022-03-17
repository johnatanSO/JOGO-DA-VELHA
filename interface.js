let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let modal = document.getElementsByClassName('modal')[0]
let fechar = document.getElementById('fechar')
let winnerPlayer = document.getElementById('winnerPlayer')
let text = document.getElementById('textFinal')
let empateText = "Ninguém venceu"

fechar.onclick = function(){
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll(".square")
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})
function handleClick(event){
    let square = event.target
    let position = square.id

    if(handleMove(position)==true){
        setTimeout(()=>{
            modal.style.display = "block"
            winnerPlayer.setAttribute("id", vencedor)
            resetRound()
        },100)
    }else if(verificarEmpate() == true){
        console.log('empate')
        modal.style.display = 'block'
        document.getElementById('text').style.display = 'none'
        winnerPlayer.setAttribute('id', "empate")
        resetRound()
    }

    updateSquare(position)
}
function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class="${symbol}"></div>`
}
function resetRound() {
    board = ['','','','','','','','','']
    numeroDeJogadas = 0
    for(let position in board){
        updateSquare(position)
    }
    playerTime = (playerTime == 0) ? 1:0
    gameOver = false
    p1.innerText = scoreP1
    p2.innerText = scoreP2
}
function resetGame(){
    scoreP1 = 0
    scoreP2 = 0
    
    resetRound()
}