import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', email: '' }
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        console.log(`${this.state.username} ${this.state.email}`)
        e.preventDefault()
    }

    render() {
        return (
            <div>
                Username:
        <input
                    name="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <br />
                Email:
        <input
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <br />
                <button onClick={this.handleSubmit}>提交</button>
            </div>
        )
    }
}

export default Form;
