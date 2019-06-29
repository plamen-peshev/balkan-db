
var fs = require('fs');
var path = require('path');

var balkanDB = function() {

    var p = path.join(arguments[0], arguments[1]);
    for(var i = 2; i < arguments.length; i++){
        p = path.join(p, arguments[i]);
    }
    this.root = p;

    if (!fs.existsSync(this.root)){
        fs.mkdirSync(this.root, { recursive: true });
    }

    error.init(this.root);
};

balkanDB.prototype.get = function(dir, file, callback){
    var b = this.build(dir, file);    
    error.log(b.err);
    if (b.err){
        callback(b.err)
        return;
    }

    var index = 0;    

    function get(){
        fs.open(b.path, 'r+', function(err, fd){    
            if (err && err.code === 'EBUSY'){                
                index++;
                if (index == 10){
                    error.log(err);
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
                error.log(err);
                clearInterval(interval);

                fs.close(fd, function(){
                    fs.readFile(b.path, function(err, data){
                        error.log(err);
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

    if (fs.existsSync(b.path)){
        var interval = setInterval(get, 500);
        get();
    }
    else{
        callback(null, null);                       
    }
};

balkanDB.prototype.set = function(dir, file, json, callback){
    var b = this.build(dir, file, json);
    error.log(b.err);
    if (b.err){        
        callback(b.err)
        return;
    }    

    if (!fs.existsSync(b.dirPath)){
        fs.mkdirSync(b.dirPath);
    }

    var index = 0;

    function set(){
        fs.open(b.path, 'r+', function(err, fd){           
            if (err && err.code === 'EBUSY'){
                index++;
                if (index == 10){                    
                    error.log(err);
                    clearInterval(interval);
                    callback('Cannot delete file ' + b.path);                                    
                }
                //do nothing till next loop
            } 
            else if (err && err.code === 'ENOENT'){
                clearInterval(interval);
                fs.writeFile(b.path, b.json, function (err) {
                    error.log(err);
                    if (err) callback(err);
                    callback(null);
                });              
            } 
            else {                
                error.log(err);
                clearInterval(interval);
                fs.close(fd, function(){
                    fs.writeFile(b.path, b.json, function (err) {
                        error.log(err);
                        if (err) callback(err);
                        callback(null);
                    });
                });
            }
        });
    }
    
    var interval = setInterval(set, 500);
    set();
};

balkanDB.prototype.del = function(dir, file, callback){
    var b = this.build(dir, file);
    error.log(b.err);
    if (b.err){
        callback(b.err)
        return;
    }


    var index = 0;

    function del(){
        fs.open(b.path, 'r+', function(err, fd){

            if (err && err.code === 'EBUSY'){
                index++;
                if (index == 10){
                    error.log(err);
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
                error.log(err);
                clearInterval(interval);
                fs.close(fd, function(){
                    fs.unlink(b.path, function(err){
                        error.log(err);
                        if(err) callback(err);                        
                        callback(null);                        
                    });
                });
            }
        });
    }
    
    if (fs.existsSync(b.path)){        
        var interval = setInterval(del, 500);
        del();
    }
};


balkanDB.prototype.list = function(dir, callback){
    var b = this.build(dir, 'dummy');
    error.log(b.err);
    if (b.err){
        callback(b.err)
        return;
    }

    const fs = require('fs');

    fs.readdir(b.dirPath, (err, files) => {
        error.log(err);
        for(var i = 0; i < files.length; i++){
            files[i] = files[i].replace('.json', '');
        }
        callback(err, files);
    });
};


balkanDB.prototype.build = function(dir, file, json){
    if (!guard(dir)){
        return {
            err: `The text "${dir}" has invalid characters`
        }
    }

    if (!guard(file)){
        return {
            err: `The text "${file}" has invalid characters`
        }
    }

    return{
        dir: dir.toLowerCase(),
        file: file.toLowerCase(),        
        json: (json != undefined) ? JSON.stringify(json) : null,
        path: path.join(this.root, dir, `${file}.json`),
        dirPath: path.join(this.root, dir)
    }
};

var error = {};
error.init = function(root){
    error.root = root;
};

error.log = function(err){
    if (err){
        try{
            var p = path.join(error.root, 'errors.txt');
            if (typeof(err) != 'string'){
                err = JSON.stringify(err);            
            }
            fs.appendFile(p, new Date() + ' ERROR: ' + err + '\n', encoding='utf8', function (err) {});
        }
        catch{
        }
    }  
};


function guard(p) {
    if (p == '')
        return false;
        
    if (p == null)
        return false;
            
    if (p == undefined)
        return false;

    if (p == 'null')
        return false;
            
    if (p == 'undefined')
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


module.exports = balkanDB;





