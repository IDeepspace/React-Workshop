import React, { Component } from 'react'

class JSXDemo extends Component {
    render() {
        const user = {
            firstName: 'E2E',
            lastName: 'team'
        }

        const formatName = user => `${user.firstName}  ${user.lastName}`

        const getGreeting = (user) => {
            if (user) {
                return <h1>Hello, {formatName(user)}!</h1>;
            }
            return <h1>Hello, Stranger.</h1>;
        }

        return (
            <div>{getGreeting(user)}</div>
        )
    }
}

export default JSXDemo
