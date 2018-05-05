var orm = require('../config/orm');

module.exports = {
    insertBurger: function(burgerName, devoured) {
        orm.insertOne(burgerName, devoured);
    },

    getAll: function() {
        orm.selectAll();
    },

    updateBurger: function(id, burgerName, devoured) {
        orm.updateBurger(id, burgerName, devoured);
    }
};