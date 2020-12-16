export function calculateWinner(board: BoardState) {
    const fullTiles:BoardState = board.filter(tile => tile!==null);
    const isComplete:boolean = Boolean(fullTiles.length===9);

    const lines:number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    console.log(board, "::::::::");
        
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(">>>", board[a], board[b], board[c])
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if(isComplete){
        return "T";
    }
    return null;
  }