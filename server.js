const express = require("express");
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

// Handlebars 
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