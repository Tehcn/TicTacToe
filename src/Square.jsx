import React from 'react';
import './Square.css';

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			brand: "Ford",
			model: "Mustang",
			color: "red",
			year: 1964
		};
	}
	changeColor = () => {
		this.setState({color: "blue"});
	}
	render() {
		return (
			<div className="square" onClick={changeColor}></div>
		)
	}
}

export default Square;