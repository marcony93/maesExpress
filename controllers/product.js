'use strict'
const sql = require('mssql');

function generarQery(objeto){
    var cadena = "";
    var campos = "";
    for( var x in objeto){
        cadena = cadena + objeto[x] + ","
        campos = campos + x + ","
    }
    
    return "insert into table_name ("+campos.substring(0, campos.length - 1)+") \
    values ("+cadena.substring(0, cadena.length - 1)+")";
}

function getproduct(connection,callback)
{
    var request = new sql.Request(connection); 
    request.query('select * from table_name', (err, recordset) =>
    {
        return callback(recordset);
    });
};

function saveProducts(connection,obj,callback){
    var transaction = new sql.Transaction(connection);
    transaction.begin(function(err) {
    var queryStr = generarQery(obj);
    var request = new sql.Request(transaction);
    request.query(String(queryStr),(err, recordset) =>
    {
            if(String(typeof(err)) === 'undefined')
            {
                transaction.commit((err, recordsets) =>
                {
                    if(String(typeof(err)) === 'undefined')
                    {
                        console.log("Registro guardado con exito");
                        return callback(true);
                    }
                    else
                    {
                        console.log("Error al guardar el registro");
                        return callback(false);
                    }
                });
            }
            else
            {
                console.log("Error al guardar el registro");
                return callback(false);
            }
    });
  });
}

module.exports = {getproduct,saveProducts}





