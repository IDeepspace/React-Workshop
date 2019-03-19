import React, { Component } from 'react';

class Child extends Component {
  render() {
    const { value } = this.props;
    return <div>我是Child，得到父组件传下来的值：{value}</div>;
  }
}

export default Child;
