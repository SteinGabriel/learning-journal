import React, { Component } from 'react'
import Subjects from './components/subjects'
import Article from './components/article'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Subjects />
        <Article />
      </Container>
    )
  }
}

export default App
