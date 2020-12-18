type Tile = "X" | "O" | null;
type BoardState = Value[];
type Player = { name: string; score: number };

interface gameState {
  playerX: Player;
  playerO: Player;
  winner: string;
  isNext: Tile;
  board: Array<Tile>;
}

type series = gameState[];

type seriesState = {
  currentSeries: series;
  historicalData: series[];
  loading: boolean;
  error: string;
  seriesWinner: string;
  scoreX: number;
  scoreO: number;
};

type rootState = {
  game: gameState;
  series: seriesState;
};

type actionState = {
  type: string;
  payload: any;
};
