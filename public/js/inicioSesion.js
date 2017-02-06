function d(theUrl,data,callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("post", theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.send(JSON.stringify(data));
}



function dd(){
    d('http://localhost:8555/api/iniciarSesion',{User:"'"+document.getElementById('email').value+"'",password:document.getElementById('password').value},function(res){    
    console.log("hola",res)
})
}