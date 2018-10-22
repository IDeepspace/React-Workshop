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

  componentWillMount() {
    this.loadComments()
  }

  handleDeleteComment = index => {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this.saveComments(comments)
  }

  loadComments = () => {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }

  saveComments = comments => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleSubmitComment = comment => {
    if (!comment) return
    if (!comment.userName) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({ comments })
    this.saveComments(comments)
  }

  render() {
    return (
      <CommentWrap>
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment}
        />
      </CommentWrap>
    )
  }
}

export default App
