import React, { Component } from 'react'
import styled from 'styled-components'
import './styles/common.css'

const Container = styled.div`
  height: auto;
  align-items: center;
  color: rgb(35, 35, 35);
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
        <div
          className="subject-container"
          onClick={() => this.setState({ hidden: !this.state.hidden })}
        >
          <p className="subject-title">{title}</p>
        </div>
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
