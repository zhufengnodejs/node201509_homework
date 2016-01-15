var path = require('path');
var fs = require('fs');
var util = require('util');
var mkdirp = require('mkdirp');

module.exports = function (session) {

    var Store = session.Store;

    function FileStore(opt) {
        var options = opt || {};
        Store.call(this, options);
        this._dir = options.dir || '.';
        mkdirp.sync(this._dir);
    }
    console.log(FileStore);
    console.log(session.Store);
    util.inherits(FileStore, Store);

    FileStore.prototype.destroy = function (sid, callback) {
        fs.unlink(path.join(this._dir,sid,callback));
    }
    FileStore.prototype.get = function (sid, callback) {
          var myfilepath=path.join(this._dir, sid);
        fs.exists(myfilepath, function (exists) {
            if(exists){
                console.log(myfilepath);
                fs.readFile(myfilepath,{encoding:'utf8'},function(err,data){
                    console.log(err);
                    callback(null,JSON.parse(data));
            });
            }
            else
            {
                callback('读取出错',null);
            }
        });
    }

FileStore.prototype.set = function (sid, sess, callback) {
    fs.writeFile(path.join(this._dir,sid),JSON.stringify(sess),callback);
}



return FileStore;
}
