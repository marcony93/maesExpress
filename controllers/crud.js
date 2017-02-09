'use strict'
const sql = require('mssql');
module.exports = function(connection)
{

    var crud = {
        select:function(table,callback)
        {
            var request = new sql.Request(connection); 
            request.query(String("select * from " + table), (err, recordset) => 
            {
                return callback(recordset);
            });
        },
        selectWhere:function(table, where, callback)
        {
            var request = new sql.Request(connection);
            request.query(String("select * from " + table +" where "+ where), (err,recordset) =>
            {
                return callback(recordset);
            });
        },
        selectFieldsWhere:function(table, fields, where, callback)
        {
            var request = new sql.Request(connection);
            request.query(String("select " + fields + " from " + table +" where "+ where), (err,recordset) =>
            {
                return callback(recordset);
            });
        },
        insert:function(table,values,callback)
        {
            console.log(String("INSERT INTO "+ table +" VALUES ("+values+")"))
            var request = new sql.Request(connection);
            request.query(String("INSERT INTO "+ table +" VALUES ("+values+")"),(err,recordset) =>
            {
                if(err) return callback(false);
                else return callback(true);
            });
        }
    };
    return crud;
};