'use strict'
$( document ).ready(function() {

    var estaConectar = window.getCookie('estaConectado');

    if(!Boolean(estaConectar))
    {
    document.getElementById('navegacion').innerHTML = '<li><a href="/" >Inicio</a></li>\
                      <li><a href="/aboutUs" >Nosotros</a></li>\
                      <li><a href="/services" >Servicios</a></li>\
                      <li><a href="/login" >Iniciar sesión</a></li>\
                      <li><a href="/register" >Registrarse</a></li>';
    }
    else
    {
    document.getElementById('navegacion').innerHTML = '<li><a href="/user" >Incio</a></li>\
                <li><a href="/" >Crear Envio</a></li>\
                <li><a href="/" >Rastreo</a></li>\
                <li><a href="/" >Administrar Cuenta</a></li>';
    }
});

