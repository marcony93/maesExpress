'use strict'
const sql = require('mssql');
module.exports = function(connection)
{

    var crud = {
    get:function(table,callback)
    {
        var request = new sql.Request(connection); 
        request.query(String("select * from " + table), (err, recordset) => 
        {
            return callback(recordset);
        });
    },
    getWhere:function(table, where, callback)
    {
        var request = new sql.Request(connection);
        console.log(String("select * from " + table +" where "+ where))
        request.query(String("select * from " + table +" where "+ where), (err,recordset) =>
        {
            return callback(recordset);
        });
    }
    };
    return crud;
};