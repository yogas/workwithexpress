const express = require('express')
const getPage = require('../utils/getPage')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send(getPage('index', {title: 'Home'}))
})

module.exports = router