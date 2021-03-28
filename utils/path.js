const path = require('path')

const rootDir = path.dirname(process.mainModule.filename)

const getPath = (...params) => {
  const arr = [rootDir, ...params]
  return path.join(...arr)
}

module.exports = {
  path,
  rootDir,
  getPath
}