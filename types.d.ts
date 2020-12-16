type Tile = "X" | "O" | null;
type BoardState = Value[];
type Player = { name: string, score: number}

type gameState = {
playerX: Player,
playerO: Player,
winner: string,
isNext: Tile, 
board: Array<Tile>
};

type rootState = {
    game: gameState
}