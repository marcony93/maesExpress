'use strict'
const express = require('express');
const apirouter = express.Router();

module.exports = function(connection)
{
    const client = require('./client')(connection);
    apirouter.post("/iniciarSesion", (req,res) => 
    {
        var query = " USER_C = " + req.body.User + " and PASSWORD_C = " + req.body.password;
        client.getWhere(String(query),(respuesta) =>
        {
            res.status(200).send({j:respuesta})
        })
    })
    return apirouter;
};


