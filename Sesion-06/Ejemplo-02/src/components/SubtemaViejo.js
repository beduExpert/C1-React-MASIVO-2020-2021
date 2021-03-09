import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const SubtemaViejo = (props) => {
	const {
		match: {
			params: { subtema }
		}
	} = props;

	return (
		<p>
			{subtema}
		</p>
	);
};

SubtemaViejo.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			subtema: PropTypes.string
		})
	})
};

export default withRouter(SubtemaViejo);
