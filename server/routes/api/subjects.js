const mongoose = require('mongoose')
const router = require('express').Router()
const Subjects = mongoose.model('Subjects')

// Post method called when a new subject os added
router.post('/', (req, res, next) => {
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
})

// Gets all subjects
// sorting by the last created
// subjects
router.get('/', (req, res, next) => {
  return Subjects.find()
    .sort({ title: 'ascending' })
    .then(subjects =>
      res.json({ subjects: subjects.map(subject => subject.toJSON()) })
    )
    .catch(next)
})

router.param('id', (req, res, next, id) => {
  return Subject.findById(id, (err, subject) => {
    if (err) {
      return res.sendStatus(404)
    } else if (subject) {
      req.subject = subject
      return next()
    }
  }).catch(next)
})

// Gets an subject by its id
router.get('/:id', (req, res, next) => {
  return res.json({
    subject: req.subject.toJSON() // does it finds automatically?
  })
})

// Not sure but I think this is the method called
// when a user intends to update an subject
router.patch('/:id', (req, res, next) => {
  const { body } = req

  if (typeof body.title !== 'undefined') {
    req.subject.title = body.title
  }

  return req.subject
    .save()
    .then(() => res.json({ subjects: req.subject.toJSON() }))
    .catch(next)
})

// Deletes an subject by its id
router.delete('/:id', (req, res, next) => {
  console.log('Deleting subject ' + req.subject._id)
  return Subjects.findByIdAndRemove(req.subject._id)
    .then(() => res.sendStatus(200))
    .catch(next)
})

// exports the router
module.exports = router
