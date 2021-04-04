const fs = require('fs')
const {getPath} = require('./path')

const readDB = () => {
  let db = []
  let json = ''
  try {
    json = fs.readFileSync(getPath('db', 'db.json'), 'utf-8')
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
  fs.writeFileSync(getPath('db', 'db.json'), JSON.stringify(db, null, 2), 'utf-8')
}

const getUsers = () => {
  return readDB()
}

module.exports = {
  addUserToDB,
  getUsers
}