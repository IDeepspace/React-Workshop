import React, { Component } from 'react';
import DataProvider from './components/DataProvider';
import Dog from './components/Dog';
import Example from './components/Example';
// import Scroll from './components/Scroll';
// import FetchHooK from './components/FetchHook';
// import Main from './components/ContextHook/Main';
import ReducerHook from './components/ReducerHook';

class App extends Component {
  render() {
    return (
      <div>
        {/* <DataProvider
          render={data => {
            return <Dog target={data.target} />;
          }}
        /> */}
        {/* <Example /> */}
        {/* <Scroll /> */}
        {/* <FetchHooK /> */}
        {/* <Main /> */}
        <ReducerHook />
      </div>
    );
  }
}

export default App;
