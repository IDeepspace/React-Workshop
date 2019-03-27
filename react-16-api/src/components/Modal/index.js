import React, { Component } from 'react';
import Modal from './Modal';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, clicks: 0 };
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleHide = () => {
    this.setState({ showModal: false });
  };

  handleClick = () => {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState(prevState => ({
      clicks: prevState.clicks + 1,
    }));
  };

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal>
        <div className='modal'>
          <button onClick={this.handleHide}>Hide modal</button>
          <button onClick={this.handleClick}>Click</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className='app'>
        <p>Number of clicks: {this.state.clicks}</p>
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
