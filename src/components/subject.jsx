import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: auto;
  align-items: center;
  color: gray;
`

const TitleContainer = styled.div`
  height: 30px;
  max-height: 30px !important;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding-bottom: 5px;
  padding-top: 5px;
`

const Title = styled.p`
  margin-left: 20px;
`

const ArticlesContainer = styled.div`
  height: 100px;
  width: 100%;
  display: ${props => (props.hidden ? 'none' : 'block')};
`
const Article = styled.p`
  margin-left: 30px;
`

const articles = [
  { id: 1, title: 'Arrow funtions' },
  { id: 2, title: 'ES6' },
  { id: 3, title: 'Array.map' },
  { id: 4, title: 'Array.filter' },
  { id: 5, title: 'Array.set' }
]

class Subject extends Component {
  state = {
    hidden: true
  }

  render() {
    const { title, parentId, articleId } = this.props
    return (
      <Container>
        <TitleContainer
          onClick={() => this.setState({ hidden: !this.state.hidden })}
        >
          <Title>{title}</Title>
        </TitleContainer>
        <ArticlesContainer hidden={this.state.hidden}>
          {articles.map(article => (
            <Article key={articles.id}>{article.title}</Article>
          ))}
        </ArticlesContainer>
      </Container>
    )
  }
}

export default Subject
