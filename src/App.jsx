import React from 'react';
import './App.css';

import Header from './Header';
import Board from './Board';

class App extends React.Component {
	render() {
		return (
			<main>
				<Header />
				<div className="board-container">
					<Board />
				</div>
			</main>
		)
	}
}

export default App;