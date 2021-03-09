import React from 'react';
import Boton from './Boton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0
		};
	}

	handleClick = () => {
		this.setState({
			contador: this.state.contador + 1
		})
	}

   render() {
   	return (
   	   <div className="margen">
   	      <Boton
   	      	texto={this.state.contador}
   	      	handleClick={this.handleClick}
   	      />
   	   </div>
   	);
   }
}

export default App;
