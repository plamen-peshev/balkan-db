var fff = require('./index.js')

var db = new fff(__dirname, 'db', 's', 't', 'e');

// db.set('asdfasdf', 'asdfads', {}, function(err){
//     console.log(err)

// });

// db.set('asdfasdf', 'asdfads1', {}, function(err){
//     console.log(err)

// });


// db.set('asdfas1df33', 'asdfa32ds2', {}, function(err){
//     console.log(err)
// });

// db.set('templates', 'asdf>aяоаds - 13', {}, function(err){
//     db.list('templates', function(err, files){
//         console.log(files)
//     });
// });

db.setAutoIncrement('55555', {fuck: 2345}, function(err){
    console.log(db.exist('asdfas1df33', 'asdfa32ds2'));
})



