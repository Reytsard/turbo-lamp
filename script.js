const playerFactory = (name,symbol) => {
    const playerName = name;
    const playerSymbol =  symbol;
    let picks = [];
    let hasWon = false;
    return{playerSymbol, picks, hasWon};
};
const game = (() => {
    const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const player1 = playerFactory('1','X');
    const player2 = playerFactory('2','O');
    let isTie = false;
    let playerTurn = 1;
    let gameBoardArr = ['','','','','','','','',''];
    const start = () => {
        let header = document.querySelector('#header');
        header.innerHTML = "player "+playerTurn+"'s Turn";
        
        /**
         * add Player 1's turn text as title
         */
        const gameStart = () => {

        };
    };
    const changePlayer = () => {
        if(playerTurn == 1){
            playerTurn = 2;
        }else{
            playerTurn = 1;
        }
        header.innerHTML = "player "+playerTurn+"'s Turn";
    }
    let gameBoxes = document.querySelectorAll('.box');
    gameBoxes.forEach(button => {
        button.addEventListener('click', () => {
            
            setPick(button);
            addToPick(button);
            button.style.pointerEvents = 'none';
            checkIfPlayerWon(gameBoardArr,winningCombinations,playerTurn);
            changePlayer();
        });
    });
    const setPick = (button) => {
        let arrayIndex = button.dataset.value;
        if(playerTurn == 1){
            button.innerHTML = player1.playerSymbol;
            gameBoardArr[arrayIndex] = player1.playerSymbol;
        }else{
            button.innerHTML = player2.playerSymbol;
            gameBoardArr[arrayIndex] = player2.playerSymbol;
        }
    }
    const addToPick = (button) => {
        if(playerTurn == 1){
            player1.picks.push(Number.parseInt(button.getAttribute('data-value')));
        }else{
            player2.picks.push(Number.parseInt(button.getAttribute('data-value')));
        }
    }
    const checkIfPlayerWon = (gameBoardArr,winningCombinations,player) => {
        for(let i = 0; i < winningCombinations.length; i++){
            let [a,b,c] = winningCombinations[i];
            if(gameBoardArr[a] != '' && gameBoardArr[a] === gameBoardArr[b] && gameBoardArr[b] === gameBoardArr[c] ){
                if(player === 1){
                    player1.hasWon = true;
                }else if(player === 2){
                    player2.hasWon = true;
                }
            }
        }
        console.log(gameBoardArr);
        console.log(player1.hasWon, ' : ', player2.hasWon);
    }
    return{start};
    
})();
