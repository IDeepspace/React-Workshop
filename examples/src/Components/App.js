import React, { Component } from 'react';
import List from './List';
// import Parent from './Communication/FatherToChild/Parent';
// import FatherCom from './Communication/ChildToFather/FatherCom';
import FatherCom_1 from './Communication/Brothers/FatherCom';

class App extends Component {
  render() {
    return (
      <div>
        {/* <List /> */}
        {/* <Parent /> */}
        {/* <FatherCom /> */}
        <FatherCom_1 />
      </div>
    );
  }
}

export default App;
