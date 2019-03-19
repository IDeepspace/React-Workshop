import React, { Component } from 'react';

class BrotherCom extends Component {
  componentDidUpdate() {
    console.log('Brother update');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.transferMsg !== nextProps.transferMsg) {
      return true;
    }
    return false;
  }

  handleClick = () => {
    const { transferMsg } = this.props;
    transferMsg('end');
  };

  render() {
    return (
      <div>
        <p>
          Brother Component
          <button onClick={this.handleClick}>与兄弟组件通信</button>
        </p>
      </div>
    );
  }
}

export default BrotherCom;
