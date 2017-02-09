'use strict'

function enviarRegistro()
{
    window.camposVacios("frmLogin")
    window.camposVacios("frmContact")
    if(document.getElementById("password").value != document.getElementById("passwordConf").value)
        document.getElementById("mensajeContrasenia").innerHTML = "Las contraseñas no coinciden";
    else if(window.camposVacios("frmContact") || window.camposVacios("frmLogin"))
        document.getElementById("mensajeContrasenia").innerHTML = "Algunos campos estan vacíos";
    else if(!document.getElementById("Terms").checked)
        document.getElementById("mensajeContrasenia").innerHTML = "Debes aceptar los terminos de referencia";
    else 
    {
        document.getElementById("mensajeContrasenia").innerHTML = "";
        var user = {
            id : document.getElementById("idNumber").value,
            name : document.getElementById("name").value,
            company:document.getElementById("comp").value,
            cell : document.getElementById("cell").value,
            tel : document.getElementById("tel").value,
            email : document.getElementById("email").value,
            dir1 : document.getElementById("dir").value,
            country : document.getElementById("country").value,
            state : document.getElementById("state").value,
            city : document.getElementById("city").value,
            zipCode:document.getElementById("zipCode").value,
            userId:document.getElementById("userId").value,
            pass: document.getElementById("password").value
        };
        window.http('http://localhost:8555/api/registrarCliente',{client:user},function(res)
        {   
            var respuesta = JSON.parse(res);
            if(respuesta.confirmacion)
            {
                $('#registerConfirmationMessage').modal('show');
            }
            else $('#registerErrorMessage').modal('show');
        });
    }
}

function abrirSesion()
{
    document.getElementById('email').value = document.getElementById("userId").value;
    document.getElementById('password').value = document.getElementById("password").value;
    window.iniciarSesion();
}

function verificName()
{
    window.http("http://localhost:8555/api/getUsersName",{userName:document.getElementById('userId').value},function(res)
    {
        var users = JSON.parse(res);
        if(users.data.length > 0)
        {
            var mensaje = "Este nombre de usuario ya existe en la base de datos, intenta con otro";
            document.getElementById("mensajeContrasenia").innerHTML = mensaje;
            document.getElementById("userId").className = String("form-control noVacio emptyAlert");
        }
        else
        {
            document.getElementById("mensajeContrasenia").innerHTML = "";
            document.getElementById("userId").className = String("form-control noVacio");
        }
    })
}