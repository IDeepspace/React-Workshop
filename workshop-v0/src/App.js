import React, { Component } from 'react'
import HelloWorld from './HelloWorld';
import JSXDemo from './JSX-Demo';
import ComponentDemo from './Component-Demo';
import Clock from './Life-Cycle';
import Toggle from './Event-Handle';
import LoginControl from './Conditional-Rendering';
import List from './List';
import Form from './Form';


class App extends Component {
    render() {
        const messages = [
            {
                id: 1,
                text: 'React'
            },
            {
                id: 2,
                text: 'Re: React'
            },
            {
                id: 3,
                text: 'Re:Re: React'
            }
        ]
        return (
            <div>
                {/* <HelloWorld /> */}
                {/* <JSXDemo /> */}
                {/* <ComponentDemo name="Sara" /> */}
                {/* <Clock /> */}
                {/* <Toggle /> */}
                {/* <LoginControl /> */}
                {/* <List messages={messages} /> */}
                <Form />
            </div>
        )
    }
}

export default App
