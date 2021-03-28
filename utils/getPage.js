const fs = require('fs')
const {path, rootDir} = require('./path')

const getNav = (selected) => {
  const nav = [
    {title: 'Home', code: 'index', href: '/'},
    {title: 'Users', code: 'users', href: '/users'},
    {title: 'Add user', code: 'add-user', href: '/admin/add-user'}
  ]

  return nav.map(({title, code, href}) => {
    const isSelected = code === selected
    return `<a href="${href}" class="main-header__item${isSelected?' main-header__item_active':''}">${title}</a>`
  }).join('\n')
}

const getPage = (page, params={}) => {
  const tpl = fs.readFileSync(path.join(rootDir, 'views', 'tpl', 'template.html'), 'utf-8')
  const content = fs.readFileSync(path.join(rootDir, 'views', `${page}.html`), 'utf-8')

  let html = tpl.replace(/\$\{content\}/g, content)

  params.nav = getNav(page)
  
  // replace params
  for (let key in params) {
    const regExp = new RegExp(`\\$\\{${key}\\}`, 'gm')
    html = html.replace(regExp, params[key])
  }

  return html
}

module.exports = getPage