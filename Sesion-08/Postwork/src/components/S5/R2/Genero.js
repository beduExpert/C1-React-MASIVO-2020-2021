import React from 'react';

const Genero = (props) => {
	return (
		<div>
			<div className="cuadro" style={{ backgroundColor: props.color }} />
			{
				props.color === 'pink'
					? 'Será una dama hermosa.'
					: 'Será un caballero elegante.'
			}
		</div>
	);
};

export default Genero;
