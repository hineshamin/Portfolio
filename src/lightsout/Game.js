import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  render() {
    return <Board nrows={5} ncols={5} />;
  }
}

export default Game;
