'use strict'
const sql = require('mssql');
module.exports = function(connection)
{

    var crud = {
    get:function(table,callback){
            var request = new sql.Request(connection); 
            request.query(String("select * from " + table), (err, recordset) => 
            {
                console.log(recordset)
                return callback(recordset);
            });
        }
    };
    return crud;
};