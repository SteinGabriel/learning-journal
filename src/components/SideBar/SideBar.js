import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.section`
  height: 100vh;
  width: 200px;
  display: flex;
  border-right: 1px solid black;
`

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <ui>
          <li>
            <a href="#">test1</a>
            <ul>
              <li>test1 1</li>
              <li>test1 2</li>
              <li>test1 3</li>
              <li>test1 4</li>
            </ul>
          </li>
          <li>test2</li>
          <li>test3</li>
          <li>test4</li>
        </ui>
      </Container>
    )
  }
}
