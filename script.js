

const gameBoard = (() => {
    let board = Array(9)
    const getCell = (cell) => board[cell];

    const setBoard = (cell, player) => {
        const htmlCell = document.getElementById(cell);
        htmlCell.textContent = player;
    }


    return {
        getCell,
        setBoard
    }
})();

const gameController = (() => {
    const currentPlayer='x';

    const placerMark = (currentCell) => {
        if (gameBoard.getCell[currentCell] == null){
            gameBoard.setBoard(currentCell, currentPlayer);
    }
    }

    return {
        placerMark
    }

})();

const displayController = (() => {
    
    const cellClicked = (e) => {
        currentCell = e.target.id;
        gameController.placerMark(currentCell);
    }

    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("click", cellClicked, {once: true}));


})();


