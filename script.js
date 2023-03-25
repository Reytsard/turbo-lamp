const gameBoard = () => {
    let gameArea = document.querySelector('#gameArea');
    let gameboard = ['','','','','','','','',''];
    let turnCount = 1;
    let playerTurn = player1;
    let tryAgain = false;
    const removeWelcomeDiv = () => {
        console.log('clicked for removeWelDiv');
        const gameDiv = '<div id="game">\n<div id="gameBox">\n<div class="box">\n<button class="open" type="button" value="0"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="1"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="2"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="3"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="4"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="5"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="6"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="7"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="8"></button>\n</div>\n\n</div>\n</div>\n<div class="game-status" data-value="1">Player 1\'s Turn</div>\n';
        gameArea.innerHTML = gameDiv;
        let buttons = document.querySelectorAll('.box button');
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    button.classList.toggle('open');
                    button.classList.toggle('selected');
                    button.toggleAttribute('disabled');
                    addPick(playerTurn,button.value,gameboard);
                    changePlayer(); 
                });
            });
        }
    const changePlayer = () => {
            const gameStatus = gameArea.querySelector('.game-status');
        if(turnCount == 9){
            removeGameDiv();
        }else if(turnCount % 2 == 0){
            turnCount++;
            gameStatus.innerHTML = 'Player 1\'s Turn';
            gameStatus.setAttribute('data-value', '1');
            playerTurn = player1;
        }else{
            turnCount++;
            gameStatus.innerHTML = 'Player 2\'s Turn';
            gameStatus.setAttribute('data-value', '2');
            playerTurn = player2;
        }
    }
    const removeGameDiv = () => {
        const endDiv = '<div id="end-status">\n<div class="es-text">Game Over Player 1 Wins</div>\n<div class="es-buttons">\n<button id="try-again" type="button">Try Again</button>\n</div>\n</div>\n'
        gameArea.innerHTML = endDiv;
        document.querySelector('#try-again').addEventListener('click',restartGame);
    }
    const restartGame = () => {
        console.log('pressed try again');
        gameboard = [null,null,null,null,null,null,null,null,null];
        gameArea.innerHTML = '<div id="welcome">\n<div class="greetings">Welcome to test Intro Tic-Tac-Toe</div>\n<div class="game-button-options">\n<button class="start-button" data-value="start">Start</button>\n</div>\n</div>\n</div>';
        turnCount = 1;
        playerTurn = player1;
        inGame = true;
    }
    const addPick = (player, indexValue, gameboard) =>{
        gameboard[indexValue] = player.playerNumber;
    }
    return {removeWelcomeDiv, inGame}
};

const playerFactory = (name, symbol) => {
    const playerName = () => name;
    const playerNumber = symbol;
    return {playerName, playerNumber};
}



const player1 = playerFactory('player1', '1');
const player2 = playerFactory('player2', '2');
const gameboard = gameBoard(); 
const welcomeDiv = gameArea.querySelector('#welcome');
// while(gameboard.inGame){
    welcomeDiv.querySelector('.start-button').addEventListener('click',gameboard.removeWelcomeDiv);
// }
console.log(gameboard.inGame);








//main
const newGame = gameBoard();
const player1 = playerFactory(getNameFromInput, "X");
const player2 = playerFactory(getNameFromInput,"O");
newGame.showGreetings();
do{
    newGame.checkIfSomeoneWins();
    if(newGame.startIsPressed){
        newGame.removeInsideGameArea();
        newGame.addGameBox(player1, player2);
    }
    if(newGame.someoneWon || newGame.gameTie){
        newGame.removeInsideGameArea();
        newGame.showCredits();
    }
}while(newGame.tryAgain);

const gameBoard = () => {
    const gameArea = document.querySelector('#game-area');
    let startIsPressed = false;
    const showGreetings = () => {
        gameArea.innerHTML = '<div id="welcome">\n<div class="greetings">Welcome to test Intro Tic-Tac-Toe</div>\n<div class="game-button-options">\n<button class="start-button" data-value="start">Start</button>\n</div>\n</div>\n</div>';
        const startButton = gameArea.querySelector('#start-button');
        startButton.addEventListener('click', () => {
            startIsPressed = true;
        });
    };
    const removeInsideGameArea = () => {
        gameArea.innerHTML = '';
    };
    const addGameBox = (player1, player2) => {
        gameArea.innerHTML = '<div id="game">\n<div id="gameBox">\n<div class="box">\n<button class="open" type="button" value="0"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="1"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="2"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="3"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="4"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="5"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="6"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="7"></button>\n</div>\n<div class="box">\n<button class="open" type="button" value="8"></button>\n</div>\n\n</div>\n</div>\n<div class="game-status" data-value="1">Player 1\'s Turn</div>\n';
        let boxButtons = gameArea.querySelectorAll('.box button');
        boxButtons.forEach(button => {
            button.addEventListener('click',)
        });
    }
    return {showGreetings,removeInsideGameArea};
}
/**
 * make a startdisplay
 * if clicked
 * remove greeting
 * add gamebox
 * if someone wins{
 * remove gamebox
 * show who wins}
 * else if all boxes played
 * show its a tie
 * remove gamebox
 * add credits
 */