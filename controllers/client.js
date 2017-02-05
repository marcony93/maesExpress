'use strict'
module.exports = function(connection)
{
    const crud = require("./crud")(connection);
    const modelClient = require("../models/modelclient");
    var client = new modelClient();

// Creating hash and salt
// password('mysecret').hash(function(error, hash) {
//     if(error)
//         throw new Error('Something went wrong!');

//     // Store hash (incl. algorithm, iterations, and salt)
//     myuser.hash = hash;
//     console.log(hash)
//     // Verifying a hash
//     password('mysecret').verifyAgainst(myuser.hash, function(error, verified) {
//         console.log(verified)
//         if(error)
//             throw new Error('Something went wrong!');
//         if(!verified) {
//             console.log("Don't try! We got you!");
//         } else {
//             console.log("The secret is...");
//         }
//     });
// })


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