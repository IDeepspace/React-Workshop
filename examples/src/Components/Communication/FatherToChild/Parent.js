import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor() {
    super();
    this.value = null;
    this.state = {
      value: '',
    };
  }

  handleChange = e => {
    this.value = e.target.value;
  };

  handleClick = () => {
    this.setState({
      value: this.value,
    });
  };

  render() {
    return (
      <div>
        我是Parent
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>传递</button>
        <Child value={this.state.value} />
      </div>
    );
  }
}

export default Parent;
