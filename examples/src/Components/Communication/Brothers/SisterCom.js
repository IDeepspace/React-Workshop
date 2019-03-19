import React, { Component } from 'react';

class SisterCom extends Component {
  componentDidUpdate() {
    console.log('Siser update');
  }

  render() {
    const { msg } = this.props;
    return (
      <div>
        <p>Sister Component: {msg}</p>
      </div>
    );
  }
}

export default SisterCom;
