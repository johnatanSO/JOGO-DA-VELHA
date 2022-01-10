// Iniciar variáreis

let board = ['','','','','','','','','']
let playerTime = 0;
let symbols = ['o', 'x']
let gameOver = false
let restartedGame = false
let vencedor = ''
let scoreP1 = 0
let scoreP2 = 0
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function handleMove(position){
    if (gameOver == true){
        return
    }
    if (board[position] == ''){
        board[position] = symbols[playerTime]
        gameOver = isWin()
        playerTime = (playerTime == 0) ? 1:0 
    }
    return gameOver
}
function isWin(){
    for(let i in winStates){
        let seq = winStates[i]
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            vencedor = board[pos1]
            if (vencedor == 'o') scoreP1++
            else scoreP2++            
            return true
        }
    }
    return false
}