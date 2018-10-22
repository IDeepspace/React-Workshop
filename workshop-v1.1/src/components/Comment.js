import React, { Component } from 'react'
import styled from 'styled-components'

const CommentWrap = styled.div`
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 10px;
  padding-bottom: 10px;
  min-height: 50px;
  position: relative;
`

const CommentUserName = styled.span`
  flex-shrink: 0;
  color: #00a3cf;
`

const CommentContent = styled.span`
  padding: 5px;
`

const CommentTime = styled.span`
  padding-right: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
  font-size: 12px;
`

const DeleteButton = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  color: #00a3cf;
  font-size: 12px;
  cursor: pointer;
  /* background-color: black; */
`

class Comment extends Component {
  constructor() {
    super()
    this.state = { timeString: '' }
  }

  componentWillMount() {
    this.updateTimeString()
    this.timer = setInterval(this.updateTimeString.bind(this), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  handleDeleteComment = () => {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  updateTimeString = () => {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString:
        duration > 60
          ? `${Math.round(duration / 60)} 分钟前`
          : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
  render() {
    return (
      <CommentWrap>
        <CommentUserName>{this.props.comment.userName} ：</CommentUserName>
        <CommentContent>{this.props.comment.content}</CommentContent>
        <CommentTime>{this.state.timeString}</CommentTime>
        <DeleteButton onClick={this.handleDeleteComment}>删除</DeleteButton>
      </CommentWrap>
    )
  }
}

export default Comment
