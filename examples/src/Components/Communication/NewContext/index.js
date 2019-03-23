import React, { Component } from 'react';
import MainSection from './MainSection';
import { ThemeContext, themes } from './ThemeContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleTheme}>Toggle Theme</button>
        <ThemeContext.Provider value={this.state.theme}>
          <MainSection />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
