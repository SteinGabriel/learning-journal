const mongoose = require('mongoose')
const Subjects = mongoose.model('Subjects')

const onGet = (req = null, res, next) => {
  if (req === null) {
    return Subjects.find()
      .sort({ title: 'ascending' })
      .then(subjects =>
        res.json({ subjects: subjects.map(subject => subject.toJSON()) })
      )
      .catch(next)
  } else {
    return res.json({
      subject: req.subject.toJSON()
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
  if (!body.parent_id) {
    return res.status(422).json({
      erros: {
        parent_id: 'is required'
      }
    })
  }

  // Checks if there is no author
  // and sends a 422 status code
  // with a error message
  if (!body.article_id) {
    return res.status(422).json({
      erros: {
        article_id: 'is required'
      }
    })
  }

  // Creates an instance of the subject
  // with data coming from front end
  const finalSubject = new Subjects(body)
  // Saves the new subject into database
  return finalSubject
    .save()
    .then(() => res.json({ subject: finalSubject.toJSON() }))
    .catch(next)
}

const onEdit = (req, res, next) => {
  const { body } = req

  if (typeof body.title !== 'undefined') {
    req.subject.title = body.title
  }

  return req.subject
    .save()
    .then(() => res.json({ subjects: req.subject.toJSON() }))
    .catch(next)
}

const onDelete = (req, res, next) => {
  return Subjects.findByIdAndRemove(req.subject._id)
    .then(() => res.sendStatus(200))
    .catch(next)
}

module.exports = {
  onGet,
  onPost,
  onEdit,
  onDelete
}
