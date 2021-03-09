import React from 'react';

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
				style={{ backgroundColor: this.state.color }}
			/>
		);
	}
};

export default LuzMercurial;
