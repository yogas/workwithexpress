const express = require('express')
const getPage = require('../utils/getPage')
const {getUsers} = require('../utils/user')

const router = express.Router()

router.get('/', (req, res, next) => {
  const users = getUsers()
  res.send(getPage('users', {title: 'Users page', users}))
})

module.exports = router