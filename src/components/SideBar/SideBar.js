import React, { Component } from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'
import './style.css'

const Container = styled.section`
  height: 100vh;
  width: 200px;
  background-color: #212121;
  color: #fff;
  display: flex;
  padding-top: 5px;
  flex-direction: column;
  border-right: 1px solid gray;
`

const techs = ['Javascript', 'ReactJS', 'Node.js', 'Redux']

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        {techs.map(tech => {
          return (
            <Collapsible
              contentOuterClassName="outer-content"
              triggerClassName="trigger-element"
              triggerOpenedClassName="trigger-opened-element"
              trigger={tech}
            >
              <p>test</p>
              <p>test</p>
            </Collapsible>
          )
        })}
      </Container>
    )
  }
}
