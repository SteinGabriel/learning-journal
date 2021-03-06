const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const errorHandler = require('errorhandler')
const mongoose = require('mongoose')

mongoose.promise = global.Promise

const isProduction = process.env.NODE_ENV === 'production'

const app = express()

app.use(cors())
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  session({
    secret: 'LearningJournal',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
)

if (!isProduction) {
  app.use(errorHandler())
}

mongoose.connect(
  'mongodb://localhost/learningjornal',
  function(err) {
    if (err) {
      console.log('Error: ' + err)
    } else {
      console.log('Connected!')
    }
  },
  { useNewUrlParser: true }
)
mongoose.set('debug', true)

// add models
require('./models/Articles')
require('./models/Subjects')
// add routes
app.use(require('./routes'))

app.use((req, res, next) => {
  const err = new Error('Not Found!')
  err.status = 404
  next(err)
})

app.use((err, req, res) => {
  res.status(err.status || 500)

  res.json({
    errors: {
      message: err.message,
      error: isProduction ? err : {}
    }
  })
})

app.set('port', process.env.PORT || 5000)

const server = app.listen(app.get('port'), () =>
  console.log(`Server started on http://localhost:${app.get('port')} :)`)
)
