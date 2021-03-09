import React from 'react';
import Tarea from './Tarea';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tarea: '',
			mensaje: '',
			listaTareas: ['Hacer reto 2']
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.listaTareas !== prevState.listaTareas) {
			this.setState({
				mensaje: `Por hacer: ${this.state.listaTareas.length}`
			});
		}
	}

	handleInputChange = (event) => {
		this.setState({
			tarea: event.target.value
		});
	};

	handleClick = () => {
		const tareaEnEstado = this.state.tarea;
		if (!tareaEnEstado) return;

		const tareaYaExiste = this.state.listaTareas.find(
			(existente) => existente === tareaEnEstado
		);
		if (tareaYaExiste) return alert(`Tarea "${tareaEnEstado}" ya existe.`);

		const listaActualizada = [...this.state.listaTareas, tareaEnEstado];

		this.setState({
			tarea: '',
			listaTareas: listaActualizada
		});
	};

	borrarTarea = (key) => {
		const copiaDeLista = [...this.state.listaTareas];
		copiaDeLista.splice(key, 1);

		this.setState({
			listaTareas: copiaDeLista
		});
	};

	render() {
		return (
			<div className="margen">
				{this.state.mensaje}
				<br />
				<input value={this.state.tarea} onChange={this.handleInputChange} />
				<button onClick={this.handleClick}>+</button>

				<ul>
					{this.state.listaTareas.map((trea, key) => (
						<li key={key}>
							<Tarea tarea={trea} borrarTarea={() => this.borrarTarea(key)} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
