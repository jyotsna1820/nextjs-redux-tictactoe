import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

type propTypes = {
    series: series
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(game: gameState, index: number) {
    return {gameNumber:index, winner: game.winner, playerX: game.playerX.score, playerO:game.playerO.score };
  }

const SeriesTable = (props: propTypes) => {
  const classes = useStyles();
  
  const rows = props.series.map((game: gameState, index: number) => createData(game, index));

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Game #</TableCell>
            <TableCell align="right">Winner</TableCell>
            <TableCell align="right">Player X Score</TableCell>
            <TableCell align="right">Player O Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.gameNumber}>
              <TableCell component="th" scope="row">
                {row.gameNumber}
              </TableCell>
              <TableCell align="right">{row.winner}</TableCell>
              <TableCell align="right">{row.playerX}</TableCell>
              <TableCell align="right">{row.playerO}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SeriesTable;
