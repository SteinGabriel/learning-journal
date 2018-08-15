import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.section`
  max-width: 240px;
  min-width: 90px;
  width: 20%;
  height: 100vh
  border-right: 1px solid rgba(0,0,0,0.125)
`

const Subject = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding-top: 5px;
  padding-bottom: 5px;
`

const subjects = [
  { title: 'Javascript', parent_id: 0, article_id: 0 },
  { title: 'HTML', parent_id: 0, article_id: 0 },
  { title: 'CSS', parent_id: 0, article_id: 0 },
  { title: 'Redux', parent_id: 0, article_id: 0 },
  { title: 'Typescript', parent_id: 0, article_id: 0 }
]

// List of all subjects
class Subjects extends Component {
  render() {
    return (
      <Container>
        {subjects.map(subject => (
          <Subject>
            <p style={{ marginLeft: 20 }}>{subject.title}</p>
          </Subject>
        ))}
      </Container>
    )
  }
}

export default Subjects
