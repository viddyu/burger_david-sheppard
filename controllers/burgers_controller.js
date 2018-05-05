var burger = require('../models/burger');
var orm = require('../config/orm');

module.exports = function (app) {

    app.get('/', function (req, res) {
        var eaten;
        orm.selectAll(function (result) {

            res.render("index", {
                eatenBurgers: result

            });

            console.log(result);

        });

    });

    app.get('/api/getburgers', function (req, res) {
        
        res.json(req.body);
    });

    app.post('/api/newburger', function (req, res) {
        
        burger.insertBurger(req.body);
    });

    app.post('/api/updateburger', function (req, res) {
        
    });

}