const mongoose = require('mongoose')
const Articles = mongoose.model('Articles')

const onGet = (req = null, res, next) => {
  // Gets all articles when req is null
  if (req === null) {
    return Articles.find()
      .sort({ createdAt: 'descending' })
      .then(articles =>
        res.json({ articles: articles.map(article => article.toJSON()) })
      )
      .catch(next)
  } else {
    return res.json({
      article: req.article.toJSON()
    })
  }
}

const onPost = (req, res, next) => {
  const { body } = req

  // Checks if there is no title
  // and sends a 422 status code
  // with a error message
  if (!body.title) {
    return res.status(422).json({
      erros: {
        title: 'is required'
      }
    })
  }

  // Checks if there is no author
  // and sends a 422 status code
  // with a error message
  if (!body.author) {
    return res.status(422).json({
      erros: {
        author: 'is required'
      }
    })
  }

  // Checks if there is no body
  // and sends a 422 status code
  // with a error message
  if (!body.body) {
    return res.status(422).json({
      erros: {
        body: 'is required'
      }
    })
  }

  // Creates an instance of the Article
  // with data coming from front end
  const finalArticle = new Articles(body)
  // Saves the new article into database
  return finalArticle
    .save()
    .then(() => res.json({ article: finalArticle.toJSON() }))
    .catch(next)
}

const onEdit = (req, res, next) => {
  const { body } = req

  console.log('body', body)
  if (typeof body.title !== 'undefined') {
    req.article.title = body.title
  }

  if (typeof body.author !== 'undefined') {
    req.article.author = body.author
  }

  if (typeof body.body !== 'undefined') {
    req.article.body = body.body
  }

  return req.article
    .save()
    .then(() => res.json({ articles: req.article.toJSON() }))
    .catch(next)
}

const onDelete = (req, res, next) => {
  return Articles.findByIdAndRemove(req.article._id)
    .then(() => res.sendStatus(200))
    .catch(next)
}

module.exports = {
  onGet,
  onPost,
  onEdit,
  onDelete
}
