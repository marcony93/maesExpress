'user strict'

function iniciarSesion(){
    console.log("s")
        window.httpGet('https://www.zipcodeapi.com/rest/SytJNAi1lo2KC6WLWhpcLroTGTC3bRH4pbNdL6e7ugR7nOSj5iwRJVKqOnt0fa4E/distance.json/22191/22192/mile',function(res)
        {   
            console.log(res)
        });
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
