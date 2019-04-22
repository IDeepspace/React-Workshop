import React, { Component } from 'react';

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: 'DianDian',
    };
  }

  render() {
    return <div>{this.props.render(this.state)}</div>;
  }
}

export default DataProvider;
