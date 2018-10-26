import React, { Component } from 'react';

import './App.css';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      result : 0,
      operation : "",
      currentValue : ""
    }
  }



  handleClick = (e) => this.setState({
    result : e.target.getAttribute('value')
  })

  handleOperation = (e) => this.setState({
    operation : e.target.getAttribute('value')
  })

  render() {
    return (

      <div className="App">

        <input type="text" value={this.state.result} />
      <input type="text" value={this.state.operation} />  
        <div >
        <div>
          <button name="AC" onClick={this.handleOperation} >"AC"</button>
          <button name="+/-" onClick={this.handleOperation} >"+/-"</button>
          <button name="%" onClick={this.handleOperation} >"%" </button>
        </div>
        <div>
          <button name="7" onClick={this.handleClick} value="7" >"7" </button>
          <button name="8" onClick={this.handleClick}  value="8">"8" </button>
          <button name="9" onClick={this.handleClick}  value="9">"9" </button>
          <button name="x" onClick={this.handleOperation}  value="x">"x" </button>
        </div>
        <div>
          <button name="4" onClick={this.handleClick} value="4">"4" </button>
          <button name="5" onClick={this.handleClick} value="5">"5" </button>
          <button name="6" onClick={this.handleClick} value="6">"6" </button>
          <button name="-" onClick={this.handleOperation}  value="-">"-" </button>
        </div>
        <div>
          <button name="1" onClick={this.handleClick} value="1">"1" </button>
          <button name="2" onClick={this.handleClick} value="2">"2" </button>
          <button name="3" onClick={this.handleClick} value="3">"3" </button>
          <button name="+" onClick={this.handleOperation}  value="+">"+" </button>
        </div>
        <div>
          <button name="0" onClick={this.handleClick}  value="0">"0" </button>
          <button name="." onClick={this.handleOperation} value=".">"." </button>
          <button name="=" onClick={this.handleOperation}  value="=">"=" </button>
          <button name="÷" onClick={this.handleOperation}  value="+">"÷" </button>
        </div>
      </div>
      </div>
    );
  }
}


