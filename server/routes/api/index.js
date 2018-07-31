const router = require('express').Router()

router.use('/articles', require('./articles'))
router.use('/subjects', require('./subjects'))

module.exports = router
