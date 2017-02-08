
const middelwares = {
    isLoggedIn : function(req,res,next)
    {
        if(String(req.cookies.estaConectado) == "true") return next();
        res.redirect('/');
    },
    isLoggedInBloq : function(req,res,next)
    {
        if(String(req.cookies.estaConectado) == "true") res.redirect('/user');
        return next();
    },
    isSuperUser : function(req,res,next)
    {
        if(req.user.isSuperUser) return next();
        res.redirect('/');
    }
}

module.exports = middelwares;