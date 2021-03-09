import React from 'react';
import PropTypes from 'prop-types';
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
					height: this.props.height || this.state.height,
					backgroundColor: this.props.backgroundColor || this.state.backgroundColor
				}}
			>
				<Cubierto />
				<Plato />
				<Cubierto />
			</div>
		);
	}
};

Mantel.propTypes = {
	height: PropTypes.number,
	backgroundColor: PropTypes.string
}

export default Mantel;
