const express = require('express')
const bodyParser = require('body-parser')
const {path, rootDir} = require('./utils/path')
const getPage = require('./utils/getPage')

const homeRoutes = require('./routes/home')
const usersRoutes = require('./routes/users')
const adminRouters = require('./routes/admin')

const app = express()

app.use(express.static(path.join(rootDir, 'public')))
app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRouters)
app.use('/users', usersRoutes)
app.use(homeRoutes)

app.use('/', (req, res, next) => {
  res.status(404).send(getPage('404', {title: 'Error 404'}))
})

app.listen(3002)