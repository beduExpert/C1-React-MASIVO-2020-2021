import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const PlanRedux = () => {
	const match = useRouteMatch();

	return (
		<div>
			<h1>Redux</h1>

			<Link to={`${match.url}/actions`}>
				Actions
			</Link>
			-
			<Link to={`${match.url}/reducers`}>
				Reducers
			</Link>
		</div>
	);
};

export default PlanRedux;
