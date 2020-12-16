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

type series = gameState[];

type seriesState = {
    currentSeries: series,
    historicalData: series[]
}

type rootState = {
    game: gameState,
    series: seriesState
}