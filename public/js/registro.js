'use strict'

function enviarRegistro()
{
    var user = {
        id : "bsaolss",
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        dir1 : document.getElementById("dir1").value,
        dir2 : document.getElementById("dir2").value,
        city : document.getElementById("city").value,
        state : document.getElementById("state").value,
        country : document.getElementById("country").value,
        tel : document.getElementById("tel").value,
        cell : document.getElementById("cell").value,
        f:"re",
        ed:"res",
        pass: document.getElementById("pass").value
    };

    window.http('http://localhost:8555/api/registrarCliente',{client:user},function(res)
    { 
        console.log(res)   
    });

}