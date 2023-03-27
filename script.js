const game = (() => {
    const winPatt = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,8],[2,5,8],[0,4,8],[2,4,6]];
    const player1 = 'X';
    const player2 = 'O';
    const playerTurn = 1;
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {

        });
    });
})();