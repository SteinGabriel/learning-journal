import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 45px;
  width: 100% auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default props => {
  return <Container>{props.name}</Container>
}
