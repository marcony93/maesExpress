'use strict'

function enviarRegistro()
{
    window.camposVacios("de");

    if(document.getElementById("password").value != document.getElementById("passwordConf").value)
    {
        document.getElementById("mensajeContrasenia").innerHTML = "Las contraseñas no coinciden";
    }
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
        console.log(user)
        window.http('http://localhost:8555/api/registrarCliente',{client:user},function(res)
        {   
            var respuesta = JSON.parse(res);
            if(respuesta.confirmacion)  $('#registerConfirmationMessage').modal('show');
            else $('#registerErrorMessage').modal('show');
        });
    }
}