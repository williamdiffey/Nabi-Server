const express = require('express')
// const uuid = require('uuid/v4')
const logger = require('../logger')
const store = require('../store')

const questionsRouter = express.Router()
const bodyParser = express.json()

questionsRouter
  .route('/questions')
  .get((req, res) => {
    res.json(store.questions)
  })
  
  boilerplateRouter
  .route('/questions/:questionid')
  .get((req, res) => {
    const { bookmark_id } = req.params

    const bookmark = store.bookmarks.find(c => c.id == bookmark_id)

    if (!question) {
      logger.error(`question with id ${questionid} not found.`)
      return res
        .status(404)
        .send('Question Not Found')
    }

    res.json(question)
  })

module.exports = questionsRouter