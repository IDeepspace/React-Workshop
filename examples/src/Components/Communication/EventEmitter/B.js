import React, { Component } from 'react';
import eventEmitter from './eventEmitter';

class B extends Component {
  state = {
    value: '',
  };

  componentDidMount() {
    eventEmitter.on('dispatch', this.valueChange);
  }

  componentWillUnmount() {
    eventEmitter.off('dispatch', this.valueChange);
  }

  valueChange = value => {
    this.setState({
      value,
    });
  };

  render() {
    return (
      <div className='card'>
        我是Brother B, 我从A接受到的value是：
        {this.state.value}
      </div>
    );
  }
}

export default B;
