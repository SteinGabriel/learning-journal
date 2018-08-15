import React, { Component } from 'react'
import styled from 'styled-components'
import Subject from './subject'

const Container = styled.section`
  max-width: 240px;
  min-width: 90px;
  width: 20%;
  height: 100vh
  border-right: 1px solid rgba(0,0,0,0.125)
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
          <Subject title={subject.title} />
        ))}
      </Container>
    )
  }
}

export default Subjects
