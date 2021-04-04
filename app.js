const express = require('express')
const bodyParser = require('body-parser')
const {getPath} = require('./utils/path')
const ejsRenderLayout = require('./middlewares/ejsRenderLayout')
const PORT = 3002

const homeRoutes = require('./routes/home')
const usersRoutes = require('./routes/users')
const adminRouters = require('./routes/admin')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views/layouts')

app.use(ejsRenderLayout('layout'))
app.use(express.static(getPath('public')))
app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRouters)
app.use('/users', usersRoutes)
app.use(homeRoutes)

app.use('/', (req, res, next) => {
  res.status(404).renderEjs('404', {title: 'Error 404'})
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)  
})