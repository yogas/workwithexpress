const express = require('express')
const {getUsers} = require('../utils/user')

const router = express.Router()

router.get('/', (req, res, next) => {
  const users = getUsers()
  res.renderEjs('users', {title: 'Users page', users})
})

module.exports = router