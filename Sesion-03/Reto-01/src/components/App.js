import React from 'react';
import Boton from './Boton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0
		};
	};

	sumar = () => {
		this.setState({
			contador: this.state.contador + 1
		})
	};

	restar = () => {
		this.setState({
			contador: this.state.contador - 1
		})
	};

   render() {
   	return (
   	   <div className="margen">
   	      <Boton
   	      	texto="Sumar"
   	      	handleClick={this.sumar}
   	      />
   	      {this.state.contador}
   	      <Boton
   	      	texto="Restar"
   	      	handleClick={this.restar}
   	      />
   	   </div>
   	);
   }
}

export default App;
