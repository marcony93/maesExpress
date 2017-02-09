'use strict'
const express = require('express');
const apirouter = express.Router();

module.exports = function(connection)
{
    const password = require('password-hash-and-salt');
    const client = require('./client')(connection);

    apirouter.post("/iniciarSesion", (req,res) => 
    {
        var query = " USER_C = " + req.body.User;
        client.getWhere(String(query),(respuesta) =>
        {
            if(respuesta.length>0)
            {
                password(req.body.password).verifyAgainst(respuesta[0].PASSWORD_C, function(error, verified) {
                    if(error) res.status(200).send({confirmacion:false});
                    if(!verified) res.status(200).send(false);
                    else {
                        respuesta[0].PASSWORD_C = null;
                        res.cookie("estaConectado" , true)
                        res.cookie("userCookie",respuesta)
                        res.status(200).send({data:respuesta,confirmacion:true}); 
                    }
                });
            }
            else res.status(200).send(false);
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


