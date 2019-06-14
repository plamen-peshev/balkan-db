
var fs = require('fs');
var path = require('path');

var balkanDB = function(root) {
    this.root = root;
};

balkanDB.prototype.get = function(dir, file, callback){
    var b = this.build(dir, file);
    if (b.err){
        callback('Not valid path')
        return;
    }

    var interval = setInterval(get, 500);
    var index = 0;

    function get(){
        fs.open(b.path, 'r+', function(err, fd){
            if (err && err.code === 'EBUSY'){
                index++;
                if (index == 10){
                    clearInterval(interval);
                    callback('Cannot delete file ' + b.path);                                    
                }
                //do nothing till next loop
            } 
            else if (err && err.code === 'ENOENT'){
                clearInterval(interval);
                callback(null, null);               
            } 
            else {
                clearInterval(interval);

                fs.close(fd, function(){
                    fs.readFile(b.path, function(err, data){
                        if (err) callback(err);
                        var result = null;
                        if (data != null && data != undefined){
                            result = JSON.parse(data);
                        }
                        callback(null, result);
                    });
                });
            }
        });
    }
};

balkanDB.prototype.set = function(dir, file, json, callback){
    var b = this.build(dir, file, json);
    if (b.err){
        callback('Not valid path')
        return;
    }

    var interval = setInterval(set, 500);
    var index = 0;

    function set(){
        fs.open(b.path, 'r+', function(err, fd){
            if (err && err.code === 'EBUSY'){
                index++;
                if (index == 10){
                    clearInterval(interval);
                    callback('Cannot delete file ' + b.path);                                    
                }
                //do nothing till next loop
            } 
            else if (err && err.code === 'ENOENT'){
                clearInterval(interval);
                fs.writeFile(b.path, b.json, function (err) {
                    if (err) callback(err);
                    callback(null);
                });              
            } 
            else {
                clearInterval(interval);
                fs.close(fd, function(){
                    fs.writeFile(b.path, b.json, function (err) {
                        if (err) callback(err);
                        callback(null);
                    });
                });
            }
        });
    }
};

balkanDB.prototype.del = function(dir, file, callback){
    var b = this.build(dir, file);
    if (b.err){
        callback('Not valid path')
        return;
    }

    var interval = setInterval(del, 500);
    var index = 0;

    function del(){
        fs.open(b.path, 'r+', function(err, fd){
            if (err && err.code === 'EBUSY'){
                index++;
                if (index == 10){
                    clearInterval(interval);
                    callback('Cannot delete file ' + b.path);                                    
                }
                //do nothing till next loop
            } 
            else if (err && err.code === 'ENOENT'){
                clearInterval(interval);
                callback(null);                
            } 
            else {
                clearInterval(interval);
                fs.close(fd, function(){
                    fs.unlink(b.path, function(err){
                        if(err) callback(err);                        
                        callback(null);                        
                    });
                });
            }
        });
    }
};


balkanDB.prototype.build = function(dir, file, json){
    if (!guard(dir)){
        return {
            err: 'Not valid dir name'
        }
    }

    if (!guard(dir)){
        return {
            err: 'Not valid file name'
        }
    }

    var dir1 = path.join(__dirname, this.root);
    if (!fs.existsSync(dir1)){
        fs.mkdirSync(dir1);
    }
    
    var dir2 = path.join(dir1, dir);
    if (!fs.existsSync(dir2)){
        fs.mkdirSync(dir2);
    }

    return{
        dir: dir.toLowerCase(),
        file: file.toLowerCase(),        
        json: (json != undefined) ? JSON.stringify(json) : null,
        path: path.join(__dirname, this.root, dir, `${file}.json`)
    }
};


function guard(p) {
    if (p == '')
        return false;
        
    if (p == null)
        return false;
            
    if (p == undefined)
        return false;

    if (typeof p != 'string')
        return false;

    if (p.indexOf('<') != -1)
        return false;

    if (p.indexOf('>') != -1)
        return false;

    if (p.indexOf(':') != -1)
        return false;

    if (p.indexOf('"') != -1)
        return false;
    
    if (p.indexOf('/') != -1)
        return false;

    if (p.indexOf('\\') != -1)
        return false;

    if (p.indexOf('|') != -1)
        return false;        
        
    if (p.indexOf('?') != -1)
        return false;
    
    if (p.indexOf('*') != -1)
        return false;

    return true;
}


var bdb = new balkanDB('balkan-db');
bdb.set('d', 'f', {sss:34}, function(err){
    console.log(err);

    bdb.get('d', 'f',  function(err, json){
        console.log(err);
        console.log(json);
    });
});

// bdb.del('d', 'f',  function(err){
//     console.log(err);
// });





