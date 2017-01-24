'use strict'
module.exports = function(connection)
{
    const crud = require("./crud")(connection);
    var retorno = {
        get: function(callback)
        {
            crud.get("CLIENT", (res) =>
            {
                return callback(res);
            })
        },
        getWhere: function()
        {
            crud.getWhere("CLIENT","CLIENT_ID = '1504199300308' ");
        }
    }
    return retorno;
};