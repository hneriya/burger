// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var express = require("express");
var app = express();


var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(value, cb) {
        orm.insertOne('burgers', "name", value, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne('burgers', 'consumed', '1', 'id', condition, function(res) {
            cb(res);
        })
    }

}
module.exports = burger;


