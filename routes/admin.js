const express = require('express')
const getPage = require('../utils/getPage') 
const {addUserToDB} = require('../utils/user')
const router = express.Router()

router.get('/add-user', (req, res, next) => {
  const error = req.query.error ? '<div class="error">Username is empty</div>' : ''
  res.send(getPage('add-user', {title: 'Add user page', error}))
})

router.post('/add-user', (req, res, next) => {
  const {username=''} = req.body
  if (username) {
    addUserToDB({username})
    res.status(302).redirect('/users')
  } else {
    res.status(503).redirect('/admin/add-user?error=1')
  }
})


module.exports = router