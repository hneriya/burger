var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
var bodyParser = require('body-parser');
var connection = require('../config/connection.js');

// fix the 'invokePartial problem'

var handlebars = require('handlebars'),
  fs = require('fs');

// var partial = fs.readFileSync('handlebars-example-partial.html', 'utf-8'); 
// handlebars.registerPartial('example_partial', partial);

// fs.readFile('handlebars-example.html', 'utf-8', function(error, source){
//   var template = handlebars.compile(source);                                                                                                                                                                                                 
//   var html = template(data);                                                                                                                                                                                                                 
//   console.log(html)
// });
// end fix invokePartial


//Grabs all the data from the burgers table...all of the burgers! These are sorted later with Handlebars #if and #unless statements
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
    });

});

//User can enter a new burger into the system. Default value of devoured=false, so user doesn't actually enter that
router.post("/", function(req, res) {
    burger.insertOne(req.body.name, function() {
        res.redirect("/");
    });
});

//Changes status of burger from devoured=false to devoured=true

router.put("/:id", function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;
