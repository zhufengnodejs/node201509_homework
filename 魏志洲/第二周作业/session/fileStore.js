var Path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
module.exports = function (session) {
    var Store = session.Store;

    function FileStore(opt) {
        var options = opt||{};
        this._maxAge = options.maxAge || 0;
        this._dir = options.dir||'.';
        this._percent = 0.1;
        mkdirp.sync(this._dir);
    }

    FileStore.prototype = Object.create(Store.prototype);
    FileStore.prototype.get = function (sid, callback) {
        var path = Path.join(this._dir,sid);
        console.log("path :", path);
        console.log("----------");
        fs.exists(path,function(exists){
            if(exists){
                fs.readFile(path,{encoding:'utf8'},function(err,data){
                    callback(null,JSON.parse(data));
                })
            }else{
                callback(null,null);
            }
        })
        if((Math.random()*10).toFixed(0) == 1)
            this.startGC();
    }

    FileStore.prototype.startGC = function(){

        console.log('start gc');
        fs.readdir(this._dir,function(err,list){
            list.forEach(function(file){
                fs.stat(Path.join(this._dir,file),function(err,stat){
                    if(stat.mtime+this._maxAge < Date.now()){
                        fs.unlink(Path.join(this._dir,file));
                    }
                })
            });
        })
    }
    FileStore.prototype.set = function (sid, session, callback) {
        var path = Path.join(this._dir,sid);
        fs.writeFile(path,JSON.stringify(session),callback)
    }

    FileStore.prototype.destroy = function (sid, callback) {
        var path = Path.join(this._dir,sid);
        fs.unlink(path,callback);
    }
    return FileStore;
}