import React from 'react';
import './Board.css';

import Square from './Square';

var turn = "X";

class Board extends React.Component {
	render() {
		return (
			<div className="board">
				<Square id="1,1"/>
				<Square id="1,2"/>
				<Square id="1,3"/>
				<Square id="2,1"/>
				<Square id="2,2"/>
				<Square id="2,3"/>
				<Square id="3,1"/>
				<Square id="3,2"/>
				<Square id="3,3"/>
			</div>
		)
	}

	SwapTurn() {
		if(turn == "X")
			turn = "O";
		else
			turn = "X";
	}
}


export default Board;