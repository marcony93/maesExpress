'use strict'
module.exports = function(connection)
{
    const crud = require("./crud")(connection);
    const modelClient = require("../models/modelclient");
    var client = new modelClient();
    var retorno = {
        get: function(callback)
        {
            crud.get("CLIENT", (res) =>
            {
                return callback(res);
            })
        },
        getWhere: function(expresion, callback)
        {
            crud.getWhere("CLIENT", expresion, (res) =>
            {
                return callback(res);
            });
        }
    }
    return retorno;
};