/**
 * Created by wzz on 2016/1/14.
 */
exports.checkLogin = function(req, res, next){
    if(!localStorage.username){
        //req.("error", "未登陆");
        return res.redirect("/users/reg");
    }
    next();
};

exports.checkNotLogin = function (req, res, next){
    if(localStorage.username && localStorage.isLogin){
        //req.flash("error", "已经登录");
        return res.redirect("back");
    }
    next();
};

module.exports = exports;