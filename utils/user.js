const fs = require('fs')
const {path, rootDir} = require('./path')

const readDB = () => {
  let db = []
  let json = ''
  try {
    json = fs.readFileSync(path.join(rootDir, 'db', 'db.json'), 'utf-8')
  } catch (err) { 
    console.log('Error: /db/db.json was not found')
  }
  if (json.trim() !== '') {
    db = JSON.parse(json)
  }
  return db
}

const addUserToDB = (user) => {
  const db = readDB()
  if (user.username) {
    db.push(user)
  }
  fs.writeFileSync(path.join(rootDir, 'db', 'db.json'), JSON.stringify(db, null, 2), 'utf-8')
}

const getUsers = () => {
  const db = readDB()
  const users = []
  db.forEach( ({username, first_name}) => {
    users.push(`<li>${username}</li>`)
  })
  return users.join('\n')
}

module.exports = {
  addUserToDB,
  getUsers
}