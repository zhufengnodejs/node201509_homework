function checkLogin(req,res,next){
    if(req.session.sign){
        next()
    }else if(req.session.username){
        res.redirect("/login")
    }else{
        res.redirect("/reg")
    }
}
module.exports=checkLogin;