import React, { Component } from 'react';
import PropTypes from 'prop-types';

class A extends Component {
  handleChange = e => {
    this.value = e.target.value;
  };

  handleClick = () => {
    const { setValue } = this.context;
    setValue(this.value);
  };

  render() {
    return (
      <div>
        我是 parentA 的子组件 A <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>传递</button>
      </div>
    );
  }
}

class AParent extends Component {
  render() {
    return <A />;
  }
}

// 声明需要使用的Context属性
A.contextTypes = {
  setValue: PropTypes.func,
};

export default AParent;
