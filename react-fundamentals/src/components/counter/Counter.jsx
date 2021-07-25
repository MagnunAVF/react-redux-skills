import "./Counter.css"
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: props.initialNumber || 0,
      step: props.initialStep || 5,
    };

    this.inc = this.inc.bind(this);
    // or can transform inc to arrow function
    // const inc = () => { }
  }

  inc() {
    this.setState({
      number: this.state.number + this.state.step,
    });
  }

  dec = () => {
    this.setState({
      number: this.state.number - this.state.step,
    });
  };

  setStep = (event) => {
    this.setState({
      step: +event.target.value,
    });
  };

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <p>Initial Value: {this.props.initialNumber}</p>
        <p>Current Value: {this.state.number}</p>
        <div>
          <label htmlFor="stepInput">Step: </label>
          <input
            id="stepInput"
            type="number"
            value={this.state.step}
            onChange={this.setStep}
          ></input>
        </div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default Counter;
