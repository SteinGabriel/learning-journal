import React, { Component } from 'react'
import styled from 'styled-components'
import Subject from './subject'
import './styles/common.css'

const Container = styled.section`
  max-width: 240px;
  min-width: 100px;
  width: 20%;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
`

const NewSubject = styled.button`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const subjects = [
  // { id: 1, title: 'Javascript', parent_id: 0, article_id: 0 },
  // { id: 2, title: 'HTML', parent_id: 0, article_id: 0 },
  // { id: 3, title: 'CSS', parent_id: 0, article_id: 0 },
  // { id: 4, title: 'Redux', parent_id: 0, article_id: 0 },
  // { id: 5, title: 'Typescript', parent_id: 0, article_id: 0 }
]

// List of all subjects
class Subjects extends Component {
  render() {
    return (
      <Container>
        {subjects.length === 0 && (
          <div className="subject-container">
            <button onClick={() => console.log('clicked')}> New Subject</button>
          </div>
        )}
        {subjects.map(subject => (
          <Subject key={subjects.id} title={subject.title} />
        ))}
      </Container>
    )
  }
}

export default Subjects
