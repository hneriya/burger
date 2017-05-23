var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../config/orm.js");
var bodyParser = require('body-parser');
var connection = require('../config/connection.js');

// fix the 'invokePartial problem'

var handlebars = require('handlebars'),
  fs = require('fs');


//Grabs all the data from the burgers which get sorted with the handlebars
router.get("/", function(req, res) {
    burger.selectAll("burgers", function(data) {
        res.render("index", { burgers: data });
    });

});

//User enter a new burger into database with the value of consumed or not consumed
router.post("/", function(req, res) {
    burger.insertOne('burgers', 'name, consumed', '"' + req.body.name + '",' + req.body.consumed, function() {
        res.redirect("/");
    });
});


router.put("/:id", function(req, res) {
    burger.updateOne("burgers", "consumed", !req.body.consumed, req.params.id, function() {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;

