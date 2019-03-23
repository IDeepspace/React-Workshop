import React, { Component } from 'react';
// import List from './List';
// import Parent from './Communication/FatherToChild/Parent';
// import FatherCom from './Communication/ChildToFather/FatherCom';
// import FatherCom_1 from './Communication/Brothers/FatherCom';
// import OldContext from './Communication/OldContext/Context';
// import NewContext from './Communication/NewContext';
import Container from './Communication/EventEmitter/Container';

class App extends Component {
  render() {
    return (
      <div>
        {/* <List /> */}
        {/* <Parent /> */}
        {/* <FatherCom /> */}
        {/* <FatherCom_1 /> */}
        {/* <OldContext /> */}
        {/* <NewContext /> */}
        <Container />
      </div>
    );
  }
}

export default App;
