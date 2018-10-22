import React, { Component } from 'react'
import styled from 'styled-components'

const CommentWrap = styled.div`
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 10px;
  padding-bottom: 10px;
  min-height: 50px;
`

const CommentUserName = styled.span`
  flex-shrink: 0;
  color: #00a3cf;
`

const CommentContent = styled.span`
  padding: 5px;
`

class Comment extends Component {
  render() {
    return (
      <CommentWrap>
        <CommentUserName>{this.props.comment.userName} ：</CommentUserName>
        <CommentContent>{this.props.comment.content}</CommentContent>
      </CommentWrap>
    )
  }
}

export default Comment
