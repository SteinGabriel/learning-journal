const mongoose = require('mongoose')
const router = require('express').Router()
const Articles = mongoose.model('Articles')
const articlesController = require('../../controllers/articlesController')

// Post method called when a new article os added
router.post('/', (req, res, next) => {
  return articlesController.onPost(req, res, next)
})

// Gets all articles
// sorting by the last created
// articles
router.get('/', (req, res, next) => {
  return articlesController.onGet(null, res, next)
})

// Gets an article by its id
router.get('/:id', (req, res, next) => {
  return articlesController.onGet(req, res, next)
})

// Not sure but I think this is the method called
// when a user intends to update an article
router.patch('/:id', (req, res, next) => {
  return articlesController.onEdit(req, res, next)
})

// Deletes an article by its id
router.delete('/:id', (req, res, next) => {
  return articlesController.onDelete(req, res, next)
})

router.param('id', (req, res, next, id) => {
  return Articles.findById(id, (err, article) => {
    if (err) {
      return res.sendStatus(404)
    } else if (article) {
      req.article = article
      return next()
    }
  }).catch(next)
})

// exports the router
module.exports = router
