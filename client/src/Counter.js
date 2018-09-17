import React, { Component } from 'react';


class Counter extends Component {

	constructor() {
		super();

		this.state = {
number0: "",
number1: "",
number2: "",
number3: "",
number4: "",
number5: "",
number6: "",
number7: "",
number8: "",
number9: "",
number10: "",
number11: "",
result: 0
		};
		this.handleResultClick = this.handleResultClick.bind(this);
		this.handleInputChanged = this.handleInputChanged.bind(this);
	}

	// Method to know if the component is load

	// Function to handle the click

	handleResultClick(e) {
		this.setState({
result:  this.state.number0 + this.state.number1 + this.state.number2 + this.state.number3 +  this.state.number4 + this.state.number5 
+ this.state.number6 + this.state.number7 + this.state.number8 + this.state.number9 + this.state.number10 + this.state.number11 
		}); 
	}

	// Updating the input values
	handleInputChanged(e) {
		if(e.target.id === "number0"  ) {
this.setState({
  number0: Number(e.target.value)
});
  } else if (e.target.id === "number1" ) {
  this.setState({
    number1: Number(e.target.value)
  });
      }else if (e.target.id === "number2" ) {
        this.setState({
          number2: Number(e.target.value)
        });
      } else if (e.target.id === "number3" ) {
        this.setState({
          number3: Number(e.target.value)
        });
      } else if (e.target.id === "number4" ) {
        this.setState({
          number4: Number(e.target.value)
        });
      } else if (e.target.id === "number5" ) {
        this.setState({
          number5: Number(e.target.value)
        });
      } else if (e.target.id === "number6" ) {
        this.setState({
          number6: Number(e.target.value)
        });
      } else if (e.target.id === "number7" ) {
        this.setState({
          number7: Number(e.target.value)
        });
      } else if (e.target.id === "number8" ) {
        this.setState({
          number8: Number(e.target.value)
        });
      } else if (e.target.id === "number9" ) {
        this.setState({
          number9: Number(e.target.value)
        });
      } else if (e.target.id === "number10" ) {
        this.setState({
          number10: Number(e.target.value)
        });
      } else if (e.target.id === "number11" ) {
        this.setState({
          number11: Number(e.target.value)
        });
            }
          
	}

	render() {
		console.log('Ejecuta render()');

		// Render this HTML
	    return (
	      <div className="Content">
	        <h1>Primer Quinsena</h1>
          <h2> Desde el viernes 17 al viernes 31 de agosto </h2>

	        <h3>Calculator</h3>

          <option value="Viernes">Viernes 17 de Agosto </option>
	        <input id="number0" type="number" value = { this.state.number0 } onChange = { this.handleInputChanged } />
	        +
          <option value="Lunes">Lunes 20 de Agosto</option>
	        <input id="number1" type="number" value = { this.state.number1 } onChange = { this.handleInputChanged } />
	        +
          <option value="Martes">Martes 21 de Agosto</option>
	        <input id="number2" type="number" value = { this.state.number2 } onChange = { this.handleInputChanged }/>
          +
          <option value="Miercoles">Miercoles 22 de Agosto</option>
          <input id="number3" type="number" value = { this.state.number3 } onChange = { this.handleInputChanged }/> 
          +
          <option value="Jueves">Jueves 23 de Agosto</option>
          <input id="number4" type="number" value = { this.state.number4 } onChange = { this.handleInputChanged }/>
          +
          <option value="Viernes">Viernes 24 de Agosto</option>
          <input id="number5" type="number" value = { this.state.number5 } onChange = { this.handleInputChanged }/>
          +
          <option value="Sabado">Sabado 25 de Agosto</option>
          <input id="number6" type="number" value = { this.state.number6 } onChange = { this.handleInputChanged }/>
          +
          <option value="Lunes">Lunes 27 de Agosto</option>
          <input id="number7" type="number" value = { this.state.number7 } onChange = { this.handleInputChanged }/>
          +
          <option value="Lunes">Lunes 28 de Agosto</option>
          <input id="number8" type="number" value = { this.state.number8 } onChange = { this.handleInputChanged }/>
          +
          <option value="Lunes">Lunes 29 de Agosto</option>
          <input id="number9" type="number" value = { this.state.number9 } onChange = { this.handleInputChanged }/>
          +
          <option value="Lunes">Lunes 30 de Agosto</option>
          <input id="number10" type="number" value = { this.state.number10 } onChange = { this.handleInputChanged }/>
          +
          <option value="Lunes">Lunes 31 de Agosto</option>
          <input id="number11" type="number" value = { this.state.number11 } onChange = { this.handleInputChanged }/>
         
          <option value="Total">Total</option>
	        <button id="result" onClick={this.handleResultClick}> = </button>

	        { this.state.result }
	      </div>
	    );
	}
}

export default Counter;
