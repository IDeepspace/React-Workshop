import React, { Component } from 'react';

class ChildCom extends Component {
  constructor() {
    super();
    this.state = {
      childValue: '',
    };
  }

  childValChange = e => {
    const { onChange } = this.props;
    onChange(e.target.value);
  };

  handleClick = () => {
    const { method } = this.props;
    method();
  };

  submit = () => {
    const { addItem } = this.props;
    addItem('我是通过子组件props方式传递给父组件的数据');
  };

  render() {
    const { list } = this.props;
    return (
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div>
          <button onClick={this.handleClick}>执行父组件的方法</button>
          <button onClick={this.submit}>子组件改变父组件的数据</button>
        </div>
        <div>
          state 定义在 child
          <input onChange={this.childValChange} />
        </div>
      </div>
    );
  }
}

export default ChildCom;
