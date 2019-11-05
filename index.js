
const fs = require('fs');
const path = require('path');

var balkanDB = function() {
    var root = arguments[0];
    for(var i = 1; i < arguments.length; i++){
        var argument = arguments[i];
        root = path.join(root, argument);
    }
    this.root = root;
    error.init(this.root);
};

balkanDB.prototype.get = function(dir, file){
    if (Array.isArray(file)){
        var result = [];
        for(var i = 0; i < file.length; i++){
            result.push(this._get(dir, file[i]));    
        }
        return result;
    }
    else{
        return this._get(dir, file);
    }
};

balkanDB.prototype._get = function(dir, file){
    var d = path.join(this.root, dir);
    var f = path.join(d, `${file}.json`);

    fs.mkdirSync(d, { recursive: true });    

    try{
        var data = fs.readFileSync(f);
        return JSON.parse(data);
    }
    catch (err){
        if (err.code === 'ENOENT') {
            return null;
        } 
        else {
            error.log({
                method: "get",
                dir: dir,
                file: file,
                err: err
            });
            return null;
        }        
    }
};

balkanDB.prototype.set = function(dir, file, json){
    var d = path.join(this.root, dir);
    var f = path.join(d, `${file}.json`);

    fs.mkdirSync(d, { recursive: true });    

    try{
        fs.writeFileSync(f, JSON.stringify(json));
    }
    catch (err){
        error.log({
            method: "set",
            dir: dir,
            file: file,
            err: err
        });
    }
};

balkanDB.prototype.del = function(dir, file){
    var d = path.join(this.root, dir);
    var f = path.join(d, `${file}.json`);

    fs.mkdirSync(d, { recursive: true });    
  
    try{
        fs.unlinkSync(f);
    }
    catch(err){
        error.log({
            method: "del",
            dir: dir,
            file: file,
            err: err
        });
    }
};


balkanDB.prototype.list = function(dir){
    var d = path.join(this.root, dir);

    fs.mkdirSync(d, { recursive: true });

    try{
        var files = fs.readdirSync(d);
    
        if (files && Array.isArray(files)){
            for(var i = 0; i < files.length; i++){
                files[i] = files[i].replace('.json', '');
            }
            return files;
        }
        else{
            return [];
        }
    }
    catch (err){
        error.log({
            method: "del",
            dir: dir,
            err: err
        });
        return [];
    }    
};

balkanDB.prototype.exist = function(dir, file){
    var d = path.join(this.root, dir);
    var f = path.join(d, `${file}.json`);

    try{
        fs.mkdirSync(d, { recursive: true });
        return fs.existsSync(f);
    }
    catch(err){
        error.log({
            method: "exist",
            dir: dir,
            file: file,
            err: err
        });
        return false;
    }
};

var error = {};
error.init = function(root){
    error.root = root;
};

error.log = function(err){
    if (err){
        var f = path.join(error.root, '_errors.txt');
        fs.mkdirSync(error.root, { recursive: true });    

        var ws = fs.createWriteStream(f, { flags:'a'});
   
        ws.write(new Date() + ': ' + JSON.stringify(err) + '\n');
    
        ws.end();
    
    }  
};

module.exports = balkanDB;