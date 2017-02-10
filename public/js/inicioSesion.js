'user strict'

function iniciarSesion(){
    var usuario = document.getElementById('email').value;
    var contrasenia = document.getElementById('password').value;

    var req = {User:"'"+usuario+"'",password:contrasenia};
    window.http('http://localhost:8555/api/iniciarSesion',req,function(res){  
        var data = JSON.parse(res)
        if(data.confirmacion == true)   window.location.replace(window.location.origin + '/user');
        else $('#errorMessage').modal('show');
    })
};

function exitSession()
{
    window.deleteAllCookies();
    window.location.replace(window.location.origin)
}
