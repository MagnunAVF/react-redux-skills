import "./Counter.css";
import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import StepForm from "./StepForm";

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

  setStep = (newStep) => {
    this.setState({
      step: newStep,
    });
  };

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <Display
          initialNumber={this.props.initialNumber}
          number={this.state.number}
        />
        <StepForm step={this.state.step} setStep={this.setStep} />
        <Buttons increment={this.inc} decrement={this.dec} />
      </div>
    );
  }
}

export default Counter;
