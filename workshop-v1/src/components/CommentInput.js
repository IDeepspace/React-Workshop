import React, { Component } from 'react'
import styled from 'styled-components'

const CommentInputWrap = styled.div`
  background-color: #fff;
  border: 1px solid #f1f1f1;
  padding: 20px;
  margin-bottom: 10px;
`

const CommentField = styled.div`
  margin-bottom: 15px;
  display: flex;
`

const CommentFieldName = styled.span`
  display: flex;
  flex-basis: 100px;
  font-size: 14px;
`

const CommentFieldInput = styled.div`
  display: flex;
  flex: 1;
`
const InputBox = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  padding: 5px;
  outline: none;
  font-size: 14px;
  resize: none;
  flex: 1;
`

const TextareaBox = styled.textarea`
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  padding: 5px;
  outline: none;
  font-size: 14px;
  resize: none;
  flex: 1;
  height: 100px;
`

const CommentFieldButton = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ButtonBox = styled.button`
  padding: 5px 10px;
  width: 80px;
  border: none;
  border-radius: 3px;
  background-color: #00a3cf;
  color: #fff;
  outline: none;
  cursor: pointer;
`

class CommentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      content: ''
    }
  }

  handleUserNameChange = e => {
    this.setState({
      userName: e.target.value
    })
  }

  handleContentChange = e => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = e => {
    const { userName, content } = this.state
    this.props.onSubmit({ userName, content })
    this.setState({
      userName: '',
      content: ''
    })
  }

  render() {
    return (
      <CommentInputWrap>
        <CommentField>
          <CommentFieldName>用户名：</CommentFieldName>
          <CommentFieldInput>
            <InputBox
              value={this.state.userName}
              onChange={this.handleUserNameChange}
            />
          </CommentFieldInput>
        </CommentField>
        <CommentField>
          <CommentFieldName>评论内容：</CommentFieldName>
          <CommentFieldInput>
            <TextareaBox
              value={this.state.content}
              onChange={this.handleContentChange}
            />
          </CommentFieldInput>
        </CommentField>
        <CommentFieldButton>
          <ButtonBox onClick={this.handleSubmit}>发布</ButtonBox>
        </CommentFieldButton>
      </CommentInputWrap>
    )
  }
}

export default CommentInput
