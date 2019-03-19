import React, { Component } from 'react';
import BrotherCom from './BrotherCom';
import SisterCom from './SisterCom';

class FatherCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'start',
    };
  }

  componentDidUpdate() {
    console.log('Parent update');
  }

  transferMsg = msg => {
    this.setState({
      msg,
    });
  };

  render() {
    return (
      <div>
        <BrotherCom transferMsg={this.transferMsg} />
        <SisterCom msg={this.state.msg} />
      </div>
    );
  }
}

export default FatherCom;
