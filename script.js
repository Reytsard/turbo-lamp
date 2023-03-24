const gameBoard = () => {
    let gameArea = document.querySelector('#gameArea');
    let gameboard = [null,null,null,null,null,null,null,null,null];
    let turnCount = 1;
    let playerTurn = player1;
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
    }
    const addPick = (player, indexValue, gameboard) =>{
        gameboard[indexValue] = player.playerNumber;
    }
    return {removeWelcomeDiv}
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
welcomeDiv.querySelector('.start-button').addEventListener('click',gameboard.removeWelcomeDiv);







// const GameLogic = () => {
//     /*
//     1. game start
//     2.playerSwitch
//     3.gameEnd
//     4.showGamecredits
//      */
//     const gameArea = document.querySelector('#gameArea');
//     const gameStart = () => {
//         const introBox = '<div id="welcome">\n<div class="greetings">Welcome to test Intro Tic-Tac-Toe</div>\n<div class="game-button-options">\n<button class="start-button">Start</button>\n</div>\n</div>';
//         const gameDiv = '<div id="game">\n<div id="gameBox">\n<div class="box1">\n<button type="button"></button>\n</div>\n<div class="box2">\n<button type="button"></button>\n</div>\n<div class="box3">\n<button type="button"></button>\n</div>\n<div class="box4">\n<button type="button"></button>\n</div>\n<div class="box5">\n<button type="button"></button>\n</div>\n<div class="box6">\n<button type="button"></button>\n</div>\n<div class="box7">\n<button type="button"></button>\n</div>\n<div class="box8">\n<button type="button"></button>\n</div>\n<div class="box9">\n<button type="button"></button>\n</div>\n</div>\n</div>\n';
//         const addIntroBox = () => gameArea.appendChild(gameStart.introBox);
//         const removeIntroBox = () => gameArea.removeChild(gameStart.introBox);
//         const addGameBox = () => gameArea.appendChild(gameStart.gameDiv);
//         const removeGameBox = () => gameArea.removeChild(gameStart.gameDiv);
//         return {addIntroBox, removeIntroBox, addGameBox, removeGameBox};
//     }
//     const gameStartButton = () => {
//         gameArea.querySelector('start-button');
//         gameStartButton.addEventListener('click',() => {
//             gameArea.removeChild(gameStart.introBox);
//             gameArea.appendChild(gameStart);
//         });
//     }
//     const playerSwitch = (() => {
//         let isOngoing = true;
//         while(isOngoing){
//             /*                    
//             if player has placed their pick,
//             then next player will move next

//              */ 
//         }
//     })();


//main

/**
 * make that button on start will turn page into a gameBox
 */


// const buttonBoxes = document.querySelectorAll('.box button').forEach(button => {
    //     button.addEventListener('click', () => {
//         button.toggleAttribute('disabled');
//         button.classList.toggle('open');
//         button.classList.toggle('selected');
//     });
// });
