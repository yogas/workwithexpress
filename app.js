const express = require('express')
const bodyParser = require('body-parser')
const {getPath} = require('./utils/path')
const getPage = require('./utils/getPage')
const PORT = 3002

const homeRoutes = require('./routes/home')
const usersRoutes = require('./routes/users')
const adminRouters = require('./routes/admin')

console.log(getPath('public', 'css', 'styles.css'))

const app = express()

app.use(express.static(getPath('public')))
app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRouters)
app.use('/users', usersRoutes)
app.use(homeRoutes)

app.use('/', (req, res, next) => {
  res.status(404).send(getPage('404', {title: 'Error 404'}))
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)  
})