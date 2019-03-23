import React from 'react';
import { ThemeContext } from './ThemeContext';

class MainSection extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
              minHeight: '200px',
            }}
          >
            <h3>Hello World</h3>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default MainSection;
