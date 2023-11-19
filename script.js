
const gameBoard = (() => {
    let board = Array(9);
    const getCell = (cell) => board[cell];
    

    const setBoard = (cell, player) => {
        const htmlCell = document.getElementById(cell);
        htmlCell.textContent = player;
        board[cell] = player;
        console.log(board[cell]);
        console.log(board);
    }

    const clearBoard = () => {
        for (let i=0; i<board.length; i++){
            const htmlCell = document.getElementById(i);
            board[i] = ("");
            htmlCell.textContent = ("");
        }
    }

    return {
        getCell,
        setBoard,
        board,
        clearBoard
    }
})();



const gameController = (() => {
    const playerX = 'X';
    const playerO = 'O';
    let currentP;

    
    const changePlayer = (sign) => {
        if(sign == playerX){
            currentP = playerO;
        }
        else {
            currentP = playerX;
        }
    }

    const checkWinner = (board) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
        
        for(let i=0; i < winConditions.length; i++){
            const [a, b, c] = winConditions[i];
            if(board[a] && board[a] == board[b] && board[a] == board[c]){
                return true;
            }
        }
        return false;           
         
    }

    const placerMark = (currentCell) => {
        if (gameBoard.getCell[currentCell] == null){
            gameBoard.setBoard(currentCell, currentP);
            changePlayer(currentP)
        }

        if(checkWinner(gameBoard.board)==true){
            alert(currentP+" gana");
        }
    }

    

    return {
        placerMark,
        changePlayer,
        checkWinner
    }

})();



const displayController = (() => {

    const btnX = document.querySelector(".x");
    const btnO = document.querySelector(".o");
    const cells = document.querySelectorAll(".cell");
    const restart = document.querySelector(".restart");
    

    const restartBoard = () => {
        gameBoard.clearBoard();
        displayController.init();
    }
    
    const cellClicked = (e) => {
        currentCell = e.target.id;
        gameController.placerMark(currentCell);
    }

    btnX.addEventListener('click', restartBoard)

    const init = () => {
    cells.forEach(cell => {
        cell.removeEventListener('click', cellClicked)
        cell.addEventListener("click", cellClicked, {once: true})
    });
    }

    restart.addEventListener("click", restartBoard)

    return{init}

})();

displayController.init();
gameController.changePlayer('x')


