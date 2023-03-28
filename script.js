const game = (() => {
    const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const player1 = 'X';
    const player2 = 'O';
    let isPlayer1Winner = false;
    let isPlayer2Winner = false;
    let isTie = false;
    let playerTurn = 1;
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
            header.innerHTML = "player "+playerTurn+"'s Turn";
        }else{
            playerTurn = 1;
            header.innerHTML = "player "+playerTurn+"'s Turn";
        }
    }
    let gameBoxes = document.querySelectorAll('.box');
    gameBoxes.forEach(button => {
        button.addEventListener('click', () => {
            let arrayIndex = button.dataset.value;
            console.log(arrayIndex);
            changePlayer();
            const disableBox = () => {
                button.toggleAttribute('disabled');
            }
            disableBox();
        });
    });
    return{start};
    
})();
game.start();
