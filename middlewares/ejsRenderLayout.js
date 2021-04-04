const topMenu = require('../menu/topMenu')
const ejsRenderLayout = (layout) => (req, res, next) => {
  const [pagePath] = req.url.split('?')
  res.renderEjs = (tpl, params) => {
    res.render(layout, {tpl, topMenu, pagePath, ...params})
  }
  next()
}

module.exports = ejsRenderLayout