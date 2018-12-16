import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

let timer;
class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5
  };

  // DONE: set initial state
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(),
      hasWon: false
    };
    //this.winGame();
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // DONE: create array-of-arrays of true/false values
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        let randomNum = Math.random() < 0.5 ? true : false;
        row.push(randomNum);
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    //coord should be in y-x format like 5-5
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split('-').map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // DONE: flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y - 1, x);
    flipCell(y + 1, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);

    // DONE: win when every cell is turned off
    // DONE: determine is the game has been won
    let hasWon = board.every(row => row.every(cell => cell === false));
    if (hasWon) {
      clearInterval(timer);
    }

    this.setState({ board, hasWon });
  }

  /**Randomly try to win game */
  winGame() {
    timer = setInterval(() => {
      let y = Math.floor(Math.random() * this.props.nrows);
      let x = Math.floor(Math.random() * this.props.ncols);

      this.flipCellsAround(`${y}-${x}`);
    }, 10);
  }

  /** Render game board or winning message. */

  render() {
    // if the game is won, just show a winning msg & render nothing else
    if (this.state.hasWon) {
      return <div>Congratulations!</div>;
    }
    // make table board
    return this.state.board.map((row, y) => {
      return (
        <div>
          {row.map((val, x) => (
            <Cell
              isLit={val}
              flipCellsAroundMe={() => this.flipCellsAround(`${y}-${x}`)}
              key={`${y}-${x}`}
            />
          ))}
        </div>
      );
    });
  }
}

export default Board;
