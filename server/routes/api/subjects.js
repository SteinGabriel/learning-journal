const mongoose = require('mongoose')
const router = require('express').Router()
const Subjects = mongoose.model('Subjects')
const subjectsController = require('../../controllers/subjectsController')

// Post method called when a new subject os added
router.post('/', (req, res, next) => {
  return subjectsController.onPost(req, res, next)
})

// Gets all subjects
// sorting by the last created
// subjects
router.get('/', (req, res, next) => {
  return subjectsController.onGet(null, res, next)
})

// Gets an subject by its id
router.get('/:id', (req, res, next) => {
  return subjectsController.onGet(req, res, next)
})

// Not sure but I think this is the method called
// when a user intends to update an subject
router.patch('/:id', (req, res, next) => {
  return subjectsController.onEdit(req, res, next)
})

// Deletes an subject by its id
router.delete('/:id', (req, res, next) => {
  return subjectsController.onDelete(req, res, next)
})

router.param('id', (req, res, next, id) => {
  return Subjects.findById(id, (err, subject) => {
    if (err) {
      return res.sendStatus(404)
    } else if (subject) {
      req.subject = subject
      return next()
    }
  }).catch(next)
})

// exports the router
module.exports = router
