// Import MySQL connection.
var connection = require("./connection.js");

function printQuestionMarks(num){
  var arr = [];

  for (var i=0; i<num; i++){
    arr.push('?')
  };

  return arr.toString();
};

function objToSql(ob){
  //column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  };

  return arr.toString();
};

// Object Relational Mapper (ORM)

// var orm = {
//   selectAll: function() {
//     var queryString = "SELECT * FROM burgers;";
//     connection.query(queryString, function(err, result) {
//       console.log(result);
//     });
//   },
//   insertOne: function(burger_name) {
//     var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (??, 0);";
//     console.log(queryString);
//     connection.query(queryString, [burger_name], function(err, result) {
//       console.log(result);
//     });
//   },
//   updateOne: function(id) {
//     var queryString = "UPDATE burgers SET devoured=1 WHERE id=??;";
//     connection.query(queryString, [id], function(err, result) {
//       console.log(result);
//     });
//   }
// };

var orm = {
	selectAll: function(tableInput, cb){
		var queryString = 'SELECT * FROM ' + tableInput;

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, col, vals, cb){
		var queryString = 'INSERT INTO ' + table;
		queryString = queryString + ' (';
		queryString = queryString + col.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);
		queryString = queryString + ') ';

		connection.query(queryString, vals, function(err, result){
			if(err) throw err;
			cb(result);
		});
	},
	updateOne: function(table, objColVals, condition, cb){
		var queryString = 'UPDATE ' + table;
		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	}
};



module.exports = orm;
