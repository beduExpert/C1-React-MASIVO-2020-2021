import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const PlanReact = (props) => {
	const {
		match: { url }
	} = props;

	return (
		<div>
			<h1>React</h1>

			<Link to={`${url}/jsx`}>
				Jsx
			</Link>
			-
			<Link to={`${url}/hooks`}>
				Hooks
			</Link>
		</div>
	);
};

PlanReact.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string
	})
};

export default withRouter(PlanReact);
