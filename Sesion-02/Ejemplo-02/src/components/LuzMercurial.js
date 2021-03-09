import React from 'react';
import PropTypes from 'prop-types';

class LuzMercurial extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'pink'
		};
	}

	render() {
		return (
			<div
				className="luzMercurial"
				style={{ backgroundColor: this.props.color || this.state.color }}
			/>
		);
	}
};

LuzMercurial.propTypes = {
	color: PropTypes.string,
}

export default LuzMercurial;
