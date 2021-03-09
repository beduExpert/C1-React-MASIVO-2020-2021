import React from 'react';
import Plato from './Plato';
import Cubierto from './Cubierto';

class Mantel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 120,
			backgroundColor: 'darksalmon'
		};
	}

	render() {
		return (
			<div
				className="mantel spaceAround"
				style={{
					height: this.state.height,
					backgroundColor: this.state.backgroundColor
				}}
			>
				<Cubierto />
				<Plato />
				<Cubierto />
			</div>
		);
	}
};

export default Mantel;