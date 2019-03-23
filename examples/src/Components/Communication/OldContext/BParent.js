import React, { Component } from 'react';
import PropTypes from 'prop-types';

class B extends Component {
  render() {
    return (
      <div>
        我是 parentB 的子组件 B, A传递给我的值是：
        {this.context.value}
      </div>
    );
  }
}

class BParent extends Component {
  // shouldComponentUpdate() {
  //   return false;
  // }

  render() {
    return <B />;
  }
}

// 声明需要使用的Context属性
B.contextTypes = {
  value: PropTypes.string,
};

export default BParent;
