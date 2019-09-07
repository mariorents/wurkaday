const express = require("express");
const passport = require('passport');
const session = require('express-session');
const exphbs = require('express-handlebars')
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars 
app.set('views', './app/views')
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);

require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  force: true
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});