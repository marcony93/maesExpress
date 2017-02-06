

function dd(){
    window.http('http://localhost:8555/api/iniciarSesion',{User:"'"+document.getElementById('email').value+"'",password:document.getElementById('password').value},function(res){    
    console.log("hola",res)
})
}