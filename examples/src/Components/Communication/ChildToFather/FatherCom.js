import React, { Component } from 'react';
import ChildCom from './ChildCom';

class FatherCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['我是父组件里面的数据', '我来自父组件'],
    };
  }

  onChange = value => {
    console.log(value, '来自 child 的 value 变化');
  };

  addItem = item => {
    this.setState({
      list: [...this.state.list, item],
    });
  };

  method = () => {
    alert('我是父组件里面的方法');
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <ChildCom
          list={list}
          method={this.method}
          addItem={this.addItem}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default FatherCom;
