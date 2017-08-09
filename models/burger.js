var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb){
		orm.selectAll('burgers', function(res){
			cb(res);
		});
	},
	insertOne: function(col, vals, cb){
		orm.insertOne('burgers', col, vals, function(res){
			cb(res);
		});
	},
	updateOne: function(objColVals, condition, cb){
		orm.updateOne('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}
};


// var burger = {
//   selectAll: function(cb) {
//     orm.selectAll("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   insertOne: function(burger_name, cb) {
//     orm.insertOne("burgers", burger_name, function(res) {
//       cb(res);
//     });
//   },
//   updateOne: function(id, cb) {
//     orm.updateOne("burgers", id, function(res) {
//       cb(res);
//     });
//   }
// };
//

module.exports = burger;
