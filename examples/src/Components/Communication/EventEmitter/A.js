import React, { Component } from 'react';
import eventEmitter from './eventEmitter';

class A extends Component {
  handleChange = e => {
    this.value = e.target.value;
  };

  handleClick = () => {
    eventEmitter.trigger('dispatch', this.value);
  };

  render() {
    return (
      <div>
        我是Brother A, <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>发送</button>
      </div>
    );
  }
}

export default A;
