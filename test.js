var fff = require('./index.js')

var db = new fff(__dirname, 'db');

db.set('asdfasdf', 'asdf/asdfads', {}, function(err){
    console.log(err)

});