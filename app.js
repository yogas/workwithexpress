const express = require('express')

// Step #3
const app = express()

// Step #3
const step2 = () => {
  app.use((req, res, next) => {
    console.log('This is first middleware')
    next()
  })

  app.use((req, res, next) => {
    console.log('This is second middleware')
    res.send('<h1>Responcse from second middleware</h2>')
  })
}

// Step #3
const step3 = () => {
  app.use('/users', (req, res, next) => {
    res.send('<h1>Users</h1>')
  })

  app.use('/', (req, res, next) => {
    res.send('<h1>Homework page</h1>')
  })
}

//step2()
step3()

app.listen(3002)