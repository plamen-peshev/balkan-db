// var balkanDB = require('./index.js')


// // db.set('asdfasdf', 'asdfads', {}, function(err){
// //     console.log(err)

// // });

// // db.set('asdfasdf', 'asdfads1', {}, function(err){
// //     console.log(err)

// // });


// // db.set('asdfas1df33', 'asdfa32ds2', {}, function(err){
// //     console.log(err)
// // });

// // db.set('templates', 'asdf>aяоаds - 13', {}, function(err){
// //     db.list('templates', function(err, files){
// //         console.log(files)
// //     });
// // });


// // for (var i = 1; i < 10000; i++){
  
// //     db.set('55555', i, {
// //       "planId": "OrgChartJS-PROFESSIONAL",
// //       "amount": 7093,
// //       "ratesUSDto": {
// //           "USD": 1,
// //           "EUR": 0.8965393580778197,
// //           "INR": 70.92746996593151,
// //           "CNY": 7.041420118343196,
// //           "BGN": 1.7534516765285997
// //       },
// //       "currency": "INR",
// //       "status": "Active",
// //       "createdAt": "2019-11-01T15:10:03.679Z",
// //       "id": 6
// //   }, function(err){
// //         if (err) console.log(err)
// //     })
// // }


// // function test(i){
// //     db.set('55555', i, {
// //         "planId": "OrgChartJS-PROFESSIONAL",
// //         "amount": 7093,
// //         "ratesUSDto": {
// //             "USD": 1,
// //             "EUR": 0.8965393580778197,
// //             "INR": 70.92746996593151,
// //             "CNY": 7.041420118343196,
// //             "BGN": 1.7534516765285997
// //         },
// //         "currency": "INR",
// //         "status": "Active",
// //         "createdAt": "2019-11-01T15:10:03.679Z",
// //         "id": 6
// //     }, function(err){
// //             if (err) { 
// //                 console.log(err)
// //             }
// //             else{
// //                 i--;

// //                 if (i > 0){
// //                     test(i)
// //                 }
// //                 else{
                    
// //                     console.log(new Date());
// //                 }


// //             }
// //       })
// // }


// // console.log(new Date());
// // test(100000)


// // db.list('55555', function(err, files){
// //     if (err) { 
// //         console.log(err)
// //     }
// //     else{
// //         console.log(files.length)
// //         console.log(new Date());


// //     }
// // })

// // console.log(new Date());
// //test(100000)




// // function test(i){
// //     db.get('55555', i, function(err, data){
// //             if (err) { 
// //                 console.log(err)
// //             }
// //             else{
// //                 i--;

// //                 if (i > 0){
// //                     test(i)
// //                 }
// //                 else{
                    
// //                     console.log(new Date());
// //                 }


// //             }
// //       })
// // }


// // console.log(new Date());
// // test(100000)



// // var chunksArr = [];
// // function test(i){

// //     let fs = require('fs');
// //     var chunks = '';



// //     fs.createReadStream('C:/Git/balkan-db/db/s/t/e/55555/' + i + '.json', { flags:'r'})

// //     .on('data', function (chunk) {
    
// //         chunks += chunk;
    
// //     })
    
// //     // this will fire if the file is not there
// //     .on('error', function (err) {
    
// //         console.log(err);
    
// //     })

// //     .on('close', function () {
// //         i--;
        

// //         if (i > 0){
            
// //             //chunksArr.push(chunks);
// //             test(i)
// //         }
// //         else{
// //             console.log(chunksArr.length);

// //             console.log(startdate);
            
// //             console.log(new Date());
// //         }
     
// //     });



// // }

// // var startdate = new Date();
// // test(100000)














// // var chunksArr = [];
// // function test(i){

// //     let fs = require('fs');
// //     var chunks = '';

// //     fs.mkdirSync('C:/Git/balkan-db/db/s/t/ss/666', { recursive: true });

// //     var ws = fs.createWriteStream('C:/Git/balkan-db/db/s/t/ss/666/' + i + '.json', { flags:'w'});

// //     // this will fire if the file is not there
// //     ws.on('error', function (err) {
    
// //         console.log('error');
// //         console.log(err);
    
// //     });


// //     ws.write(JSON.stringify({
// //                 "planId3333": "OrgChartJS-PROFESSIONAL",
// //                 "amount": 7093,
// //                 "ratesUSDto": {
// //                     "USD": 1,
// //                     "EUR": 0.8965393580778197,
// //                     "INR": 70.92746996593151,
// //                     "CNY": 7.041420118343196,
// //                     "BGN": 1.7534516765285997
// //                 },
// //                 "currency": "INR",
// //                 "status": "Active",
// //                 "createdAt": "2019-11-01T15:10:03.679Z",
// //                 "id": 6
// //             }));

// //     ws.end(function(err){
// //         if (err)
// //             console.log('------------' + err);

// //         i--;


// //         if (i > 0){            
// //             test(i)
// //         }
// //         else{

// //             console.log(startdate);
            
// //             console.log(new Date());
// //         }

// //     });
// // }

// // var startdate = new Date();
// // test(10000)





// // let fs = require('fs');

// // // var stat = fs.statSync('C:/Git/balkan-db/db/s/t/ss/666/test2.json')
// // // console.log(stat)

// //     var chunks = '';
// //     fs.mkdirSync('C:/Git/balkan-db/db/s/t/ss/666', { recursive: true });

// //     fs.createReadStream('C:/Git/balkan-db/db/s/t/ss/666/test2.json', { flags:'r'})
    
// //     .on('open', function () {    
// //         console.log('open read');    
// //     })

// //     .on('data', function (chunk) {    
// //         chunks += chunk;  
// //         console.log('chunk ' + chunk);

// //     })
    
// //     // this will fire if the file is not there
// //     .on('error', function (err) {   
// //         console.log('error read');    
// //         console.log(err);    
// //     })

// //     .on('close', function () {
        
// //         console.log('read end at ' + new Date());  
// //         console.log('chunks ' + (chunks == ''));
// //     });
   

    
// // stat = fs.statSync('C:/Git/balkan-db/db/s/t/ss/666/test2.json')
// // console.log(stat)



    

// // fs.mkdirSync('C:/Git/balkan-db/db/s/t/ss/666', { recursive: true });



// // // stat = fs.statSync('C:/Git/balkan-db/db/s/t/ss/666/test2.json')
// // // console.log(stat)

// // var ws = fs.createWriteStream('C:/Git/balkan-db/db/s/t/ss/666/test2.json', { flags:'w'});

// // ws.on('error', function (err) {    
// //     console.log('error');
// //     console.log(err);    
// // });

// // ws.on('open', function () {    
// //     console.log('open write');    
// // })


// // // stat = fs.statSync('C:/Git/balkan-db/db/s/t/ss/666/test2.json')
// // // console.log(stat)

// // ws.write(JSON.stringify({
// //             "test": "2"
// //         }));


        
// // // stat = fs.statSync('C:/Git/balkan-db/db/s/t/ss/666/test2.json')
// // // console.log(stat)

// // ws.end(function(err){
// //     console.log('end at ' + new Date());
// // });









// // var bd = new balkanDB(__dirname, 'db1', 'test');

// // bd.get('asd', 'asd1', function(err, data){
// //     console.log(data)
// // })
// // bd.set('asd', 'asd1', {sss:55}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:600}, function(){})
// // bd.set('asd', 'asd1', {sss:464645}, function(){})

// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:300}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:562}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:56}, function(){})
// // bd.set('asd', 'asd1', {sss:561}, function(){})
// // bd.set('asd', 'asd1', {sss:60000}, function(){})

 

// // // bd.set('asd', 'asd3', {sss:4}, function(){})
// // //    bd.get('asd', 'asd1', function(err, data){
// // //     console.log(data);
// // //    })


// //bd.list('asd', function(){})

// // console.log(new Date());
// // var fs = require('fs');
// // for (var i = 0; i < 50000; i ++){
// //     fs.writeFileSync('C:/Git/balkan-db/db/s/t/ss/666/' + i + '.js', JSON.stringify(
// //     {
// //                         "planId3333": "OrgChartJS-PROFESSIONAL",
// //                         "amount": 7093,
// //                         "ratesUSDto": {
// //                             "USD": 1,
// //                             "EUR": 0.8965393580778197,
// //                             "INR": 70.92746996593151,
// //                             "CNY": 7.041420118343196,
// //                             "BGN": 1.7534516765285997
// //                         },
// //                         "currency": "INR",
// //                         "status": "Active",
// //                         "createdAt": "2019-11-01T15:10:03.679Z",
// //                         "id": 6
// //                     }
// //     ));
// // }

// // console.log(new Date());



// // console.log(new Date());
// // var fs = require('fs');
// // for (var i = 0; i < 50000; i ++){
// //     var test = fs.readFileSync('C:/Git/balkan-db/db/s/t/ss/666/' + i + '.js', 'utf8');

// // }

// // console.log(new Date());
// var bd = new balkanDB(__dirname, 'db1', 'test');
// // bd.set('asd', 'asd1', {sss:4});
// // bd.set('asd', 'asd2', {sss:4});
// // bd.set('asd', 'asd3', {sss:3});
// // bd.set('asd', 'asd4', {sss:4});
// // bd.set('asd', 'asd5', {sss:4});
// // bd.set('asd', 'asd6', {sss:43});
// var file = bd.get('asd', ['asd1', 'asd2342', 'asd3', 'asd4']);

//  console.log(file)
// // console.log(bd.exist('asd', 'asd3'))
// // bd.del('asd', 'asd3')

// // console.log(bd.exist('asd', 'asd3'))


// // file = bd.get('asd', 'eeee1');
// // console.log(file);


// console.log(bd.list('asd'));

// // file = bd.get('asd', 'eeee1');
// // console.log(file);

// // bd.set('asd', 'eeee1', {sss:55});

// // file = bd.get('asd', 'eeee1');
// // console.log(file);






