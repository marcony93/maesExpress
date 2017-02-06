'use strict'
const express = require('express');
const apirouter = express.Router();

module.exports = function(connection)
{
    const password = require('password-hash-and-salt');
    const client = require('./client')(connection);

    apirouter.post("/iniciarSesion", (req,res) => 
    {
        var query = " USER_C = " + req.body.User + " and PASSWORD_C = " + req.body.password;
        client.getWhere(String(query),(respuesta) =>
        {
            res.status(200).send({j:respuesta})
        })
    });

    apirouter.get("/obtener",(req,res) =>
    {
        client.get(ress =>
        {
            res.status(200).send({mensaje:ress});
        })
    });

    //Guarda el registro de un nuevo cliente
    apirouter.post("/registrarCliente", (req,res) =>
    {
        var registerClient = req.body.client;
        password(registerClient.pass).hash((error, hash) =>
        {
            if(error) throw new Error('Algo ha salido mas con el Hash');
            registerClient.pass = hash;

            var dataString = "";
            for(var x in registerClient)
            {
                dataString = dataString +",'"+ registerClient[x]+"'";
            }
            client.saveClient(dataString.substring(1),(respuesta) =>
            {
                res.status(200).send({mensaje:respuesta});
            });

        });
  
    });

    return apirouter;
};


