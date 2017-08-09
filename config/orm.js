// Import MySQL connection.
var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(burger_name) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (??, 0);";
    console.log(queryString);
    connection.query(queryString, [burger_name], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(id) {
    var queryString = "UPDATE burgers SET devoured=1 WHERE id=??;";
    connection.query(queryString, [id], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
