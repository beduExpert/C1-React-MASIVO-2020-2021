import React from 'react';
import '../css/Luz.css';

class Luz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'pink'
		};
	}

	render() {
		return (
			<div style={{ backgroundColor: this.state.color }} className="luz">
			</div>
		);
	}
};

export default Luz;
