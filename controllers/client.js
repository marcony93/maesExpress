'use strict'
module.exports = function(connection)
{
    const crud = require("./crud")(connection);
    const modelClient = require("../models/modelclient");
    var client = new modelClient();



    var retorno = {
        get: function(callback)
        {
            crud.select("CLIENT", (res) =>
            {
                return callback(res);
            })
        },
        getWhere: function(expresion, callback)
        {
            crud.selectWhere("CLIENT", expresion, (res) =>
            {
                return callback(res);
            });
        },
        getUsers: function(expresion, where, callback)
        {
            crud.selectFieldsWhere("CLIENT", expresion, where, (res) =>
            {
                return callback(res);
            });
        },
        saveClient :function(data, callback)
        {
            crud.insert("CLIENT", data, (res) =>
            {
                return callback(res);
            });
        }
    }
    return retorno;
};