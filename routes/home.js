const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.renderEjs('home', {title: 'Main page', nav: ''})
})

module.exports = router