# Working with Express.js

```
npm install
npm start
```

Server will start on port 3002 http://localhost:3002

## Useful resources
Express.js Official Docs: https://expressjs.com/en/starter/installing.html

## Template engines

### EJS
`npm install --save ejs`

`<p><%= name %></p>`

Use normal HTML and plain JavaScript in your templates

Setup ejs in application: 

```
app.set('view engine', 'pug')
app.set('views', 'views')
```

### Pug (Jade)

`npm install --save pug`

`p #{name}`

https://pugjs.org/api/getting-started.html

Use minimal HTML and custom template language

Setup pug in application:

```
app.set('view engine', 'pug')
app.set('views', 'views')
```

### Handlebars

`npm install --save express-handlebars`

`<p>{{ name }}</p>`

Use normal HTML and custom template language

https://handlebarsjs.com/
https://nodejsdev.ru/guide/express-handlebars-layout/


Setup handlebars in application:

```
const expressHbs = require('express-handlebars')

app.engine('hbs', expressHbs({
  extname: "hbs",
  defaultLayout: "",
  layoutsDir: "",
}))
app.set('view engine', 'hbs')
app.set('views', 'views')
```