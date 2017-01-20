'use strict'
const sql = require('mssql');

module.exports = function(connection){

const crud = require('./crud')(connection);

function generarQery(objeto)
{
    var cadena = "";
    var    campos = "";

    for( var x in objeto)
    {
        cadena = cadena + objeto[x] + ","
        campos = campos + x + ","
    }
    
    return "insert into table_name ("+campos.substring(0, campos.length - 1)+") \
            values ("+cadena.substring(0, cadena.length - 1)+")";
};
    var ex = {
        getproduct:function(callback){
            crud.get("CLIENT",(res)=>{
                return callback(res);
            });
        }
    }

    return ex;
};