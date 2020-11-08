const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const routes = require('./routes');
require('./config/mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(
  session({
    secret: 'todo-list-secret',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
