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
    window.UserInfo = window.urlEncodingJson(window.getCookie('userCookie')).data[0];
    document.getElementById('navegacion').innerHTML = '<li><a href="/user" >Crear Envio</a></li>\
                <li><a href="/" >Historial de Envios</a></li>\
                <li><a href="/" >Administrar Cuenta</a></li>\
                <li class="dropdown">\
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hola : '+window.UserInfo.NAME+' <span class="caret"></span></a>\
                <ul class="dropdown-menu">\
                    <li onclick="exitSession()"><a href="#">Cerrar sesión</a></li>\
                </ul>\
                </li>';
    }
});

