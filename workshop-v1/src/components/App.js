import React, { Component } from 'react'
import styled from 'styled-components'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

const CommentWrap = styled.div`
  width: 500px;
  margin: 10px auto;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  padding: 20px;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      comments: [
        { userName: 'AA', content: 'Hello' },
        { userName: 'BB', content: 'World' },
        { userName: 'CC', content: '!!!' }
      ]
    }
  }

  handleSubmitComment = comment => {
    // console.log(comment)
    this.setState({
      comments: [comment, ...this.state.comments]
    })
  }

  render() {
    return (
      <CommentWrap>
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList comments={this.state.comments} />
      </CommentWrap>
    )
  }
}

export default App
