import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding-top: 5px;
  padding-bottom: 5px;
`

class Subject extends Component {
  render() {
    const { title, parentId, articleId } = this.props
    return (
      <Container>
        <p style={{ marginLeft: 20 }}>{title}</p>
      </Container>
    )
  }
}

export default Subject
