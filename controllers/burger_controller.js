var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


router.get('/', function(req, res){
	res.redirect('/burger')
});

router.get('/burger', function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {burger: data};

		console.log(hbsObject);

		res.render('index', hbsObject);
	});
});

router.post('/burger/create', function(req, res){
	burger.insertOne(['burger_name'], [req.body.b_name], function(data){
		res.redirect('/burger')
	});
});

router.put('/burger/update/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('condition ', condition);

	burger.updateOne({'devoured': req.body.devoured}, condition, function(data){
		res.redirect('/burger');
	});
});

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   burger.selectAll(function(data) {
//     var hbsObject = {
//       burger: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });
//
// router.post("/", function(req, res) {
//   burger.insertOne([
//     "burger_name"
//   ], [
//     req.body.burger_name
//   ], function() {
//     res.redirect("/");
//   });
// });
//
// router.put("/:id", function(req, res) {
//   var id = req.params.id;
//
//   console.log("id:", id);
//
//   burger.updateOne({
//     id: id
//   }, id, function() {
//     res.redirect("/");
//   });
// });


// Export routes for server.js to use.
module.exports = router;
