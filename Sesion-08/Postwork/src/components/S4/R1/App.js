import React from 'react';
import Boton from './Boton';

const App = () => {
	const [texto, setTexto] = React.useState('cero');
	const [numero, setNumero] = React.useState(0);

	const convertir = (num, txt) => () => {
		setTexto(txt);
		setNumero(num);
	};

	return (
		<div className="margen">
			{numero} - {texto}
			<br /><br />

			<Boton
			   texto="1"
			   handleClick={convertir(1, 'uno')}
			/>
			<Boton
			   texto="2"
			   handleClick={convertir(2, 'dos')}
			/>
			<Boton
			   texto="3"
			   handleClick={convertir(3, 'tres')}
			/>
		</div>
	);
};

export default App;
