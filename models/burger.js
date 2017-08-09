var orm = require("../config/orm.js");


var burger = {
  selectAll: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger_name, cb) {
    orm.create("burgers", burger_name, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.update("burgers", id, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;
