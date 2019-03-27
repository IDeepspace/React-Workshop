import React, { Component, Fragment } from 'react';

class Render extends Component {
  //   render() {
  //     return (
  //       <div>
  //         <div>one</div>
  //         <div>two</div>
  //         <div>three</div>
  //       </div>
  //     );
  //   }
  //   render() {
  //     let data = [
  //       { value: 'One', key: '1' },
  //       { value: 'Two', key: '2' },
  //       { value: 'Three', key: '3' },
  //     ];
  //     return data.map(item => {
  //       // Don't forget the keys :)
  //       return <li key={item.key}>{item.value}</li>;
  //     });
  //   }

  render() {
    return (
      <Fragment>
        Some text.
        <h2>A heading</h2>
        More text.
        <h2>Another heading</h2>
        Even more text.
      </Fragment>
    );
  }
}

export default Render;
