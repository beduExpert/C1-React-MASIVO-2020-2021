import React from 'react';

const Usuarios = () => {
	const [usuarios, setUsuarios] = React.useState([]);

	const didMount = () => {
		setTimeout(
			() => setUsuarios(['Usuario', 'User']),
			1000
		);
	};
	React.useEffect(didMount, []);

	const desplegarUsuarios = () => {
		if (!usuarios.length) return '...';

		return usuarios.map((usurs) => `${usurs} - `);
	};

	return (
		<div>
			{desplegarUsuarios()}
		</div>
	);
};

export default Usuarios;
