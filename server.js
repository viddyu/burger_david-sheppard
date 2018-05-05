var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var orm = require("./config/orm");
var app = express();

var PORT = process.env.PORT || 3001;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/assets', express.static('public/assets'));

var bcontroller = require("./controllers/burgers_controller")(app);
app.listen(PORT, function() {
    console.log("server now running on port " + PORT);
});