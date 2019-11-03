
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


balkanDB.prototype.get = function(dir, file, callback, i){
    var resultIfArray = [];
    var that = this;
    function _get(dir, file, callback2, i){  
              
        var d = path.join(that.root, dir);
        var f = path.join(d, `${file}.json`);
        if (i != undefined){            
            f = path.join(d, `${file[i]}.json`);
        }    
        
        fs.mkdirSync(d, { recursive: true });    
    
        var rs = fs.createReadStream(f, { flags:'r'});
    
        var chunks = null;
    
        rs.on('data', function (chunk) { 
            if (chunks == null) chunks = '';
            chunks += chunk;
        });
    
        rs.on('error', function (err) { 
            error.log(err);
            if (err.code == 'ENOENT'){
                if (i != undefined){
                    resultIfArray.push(JSON.parse(chunks));                
                    i++;  
                }
                
                if (i == undefined){    
                    callback2(null, JSON.parse(chunks));
                }
                else if (i != undefined && i < file.length){      
                    _get(dir, file, callback2, i)                    
                }
                else if (i != undefined && i >= file.length){
                    callback2(null, resultIfArray);
                }
            }
            else{
                callback2(err);
            }
        });
    
        rs.on('close', function (err) { 
            error.log(err);
            if (err){
                callback2(err);                
            }
            else{
                if (i != undefined){                    
                    resultIfArray.push(JSON.parse(chunks));                
                    i++;  
                }
                
                if (i == undefined){    
                    callback2(null, JSON.parse(chunks));
                }
                else if (i != undefined && i < file.length){      
                    _get(dir, file, callback2, i)                    
                }
                else if (i != undefined && i >= file.length){
                    callback2(null, resultIfArray);
                }
            }     
        });
    };

    if (Array.isArray(file)){
        _get(dir, file, callback, 0);
    }
    else{
        _get(dir, file, callback);
    }
};




balkanDB.prototype.set = function(dir, file, json, callback){
    var d = path.join(this.root, dir);
    var f = path.join(d, `${file}.json`);

    fs.mkdirSync(d, { recursive: true });    

    var ws = fs.createWriteStream(f, { flags:'w'});

    ws.on('error', function (err) {    
        error.log(err);
        callback(err);
    });

    ws.write(JSON.stringify(json));

    // ws.on('finish', () => {
    //     console.log('wrote all data to file');
    // });

    ws.end(function(err){
        error.log(err);
        error.log(err);
        callback()
    });
};

balkanDB.prototype.del = function(dir, file, callback){
    var d = path.join(this.root, dir);
    var f = path.join(d, `${file}.json`);

    fs.mkdirSync(d, { recursive: true });    
  

    var index = 0;

    function del(){
        fs.open(f, 'r+', function(err, fd){

            if (err && err.code === 'EBUSY'){
                index++;
                if (index == 10){
                    error.log(err);
                    clearInterval(interval);
                    callback('Cannot delete file ' + f);                                    
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
                    fs.unlink(f, function(err){
                        error.log(err);
                        if(err) callback(err);                        
                        callback(null);                        
                    });
                });
            }
        });
    }
    
    if (fs.existsSync(f)){        
        var interval = setInterval(del, 500);
        del();
    }
};


balkanDB.prototype.list = function(dir, callback){
    var d = path.join(this.root, dir);

    fs.mkdirSync(d, { recursive: true });

    fs.readdir(d, (err, files) => {
        error.log(err);
        if (files && Array.isArray(files)){
            for(var i = 0; i < files.length; i++){
                files[i] = files[i].replace('.json', '');
            }
            callback(err, files);
        }
        else{
            callback(err, []);
        }
    });    
};



balkanDB.prototype.exist = function(dir, file){
    dir = path.join(this.root, dir);
    file = path.join(dir, file + '.json');
    fs.mkdirSync(dir, { recursive: true });
    return fs.existsSync(file);
};




var error = {};
error.init = function(root){
    error.root = root;
};

error.log = function(err){
    if (err){
        fs.mkdirSync(error.root, { recursive: true });    

        try{
            var p = path.join(error.root, '_errors.txt');
            if (typeof(err) != 'string'){
                err = JSON.stringify(err);            
            }
            fs.appendFile(p, new Date() + ' ERROR: ' + err + '\n', encoding='utf8', function (err) {});
        }
        catch{
        }
    }  
};




module.exports = balkanDB;





