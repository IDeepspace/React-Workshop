import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AParent from './AParent';
import BParent from './BParent';

class Context extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  setValue = value => {
    this.setState({
      value,
    });
  };

  // 返回Context对象，方法名是约定好的
  getChildContext() {
    return {
      value: this.state.value,
      setValue: this.setValue,
    };
  }

  render() {
    return (
      <div>
        <AParent />
        <BParent />
      </div>
    );
  }
}

// 声明Context对象属性
Context.childContextTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default Context;
