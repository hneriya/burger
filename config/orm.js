// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    insertOne: function(tableName, column, value, cb) {
                console.log(arguments);
        var queryString = "INSERT INTO ?? (" + column + ") VALUES ("+ value +")";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    },

    updateOne: function(tableName, columnName, columnValue, id, cb) {
        var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
        console.log(arguments);
        connection.query(queryString, [tableName, columnName, columnValue, "id", id], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;
