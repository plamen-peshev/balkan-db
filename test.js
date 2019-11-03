var balkanDB = require('./index.js')


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


// for (var i = 1; i < 10000; i++){
  
//     db.set('55555', i, {
//       "planId": "OrgChartJS-PROFESSIONAL",
//       "amount": 7093,
//       "ratesUSDto": {
//           "USD": 1,
//           "EUR": 0.8965393580778197,
//           "INR": 70.92746996593151,
//           "CNY": 7.041420118343196,
//           "BGN": 1.7534516765285997
//       },
//       "currency": "INR",
//       "status": "Active",
//       "createdAt": "2019-11-01T15:10:03.679Z",
//       "id": 6
//   }, function(err){
//         if (err) console.log(err)
//     })
// }


// function test(i){
//     db.set('55555', i, {
//         "planId": "OrgChartJS-PROFESSIONAL",
//         "amount": 7093,
//         "ratesUSDto": {
//             "USD": 1,
//             "EUR": 0.8965393580778197,
//             "INR": 70.92746996593151,
//             "CNY": 7.041420118343196,
//             "BGN": 1.7534516765285997
//         },
//         "currency": "INR",
//         "status": "Active",
//         "createdAt": "2019-11-01T15:10:03.679Z",
//         "id": 6
//     }, function(err){
//             if (err) { 
//                 console.log(err)
//             }
//             else{
//                 i--;

//                 if (i > 0){
//                     test(i)
//                 }
//                 else{
                    
//                     console.log(new Date());
//                 }


//             }
//       })
// }


// console.log(new Date());
// test(100000)


// db.list('55555', function(err, files){
//     if (err) { 
//         console.log(err)
//     }
//     else{
//         console.log(files.length)
//         console.log(new Date());


//     }
// })

// console.log(new Date());
//test(100000)




// function test(i){
//     db.get('55555', i, function(err, data){
//             if (err) { 
//                 console.log(err)
//             }
//             else{
//                 i--;

//                 if (i > 0){
//                     test(i)
//                 }
//                 else{
                    
//                     console.log(new Date());
//                 }


//             }
//       })
// }


// console.log(new Date());
// test(100000)



// var chunksArr = [];
// function test(i){

//     let fs = require('fs');
//     var chunks = '';



//     fs.createReadStream('C:/Git/balkan-db/db/s/t/e/55555/' + i + '.json', { flags:'r'})

//     .on('data', function (chunk) {
    
//         chunks += chunk;
    
//     })
    
//     // this will fire if the file is not there
//     .on('error', function (err) {
    
//         console.log(err);
    
//     })

//     .on('close', function () {
//         i--;
        

//         if (i > 0){
            
//             //chunksArr.push(chunks);
//             test(i)
//         }
//         else{
//             console.log(chunksArr.length);

//             console.log(startdate);
            
//             console.log(new Date());
//         }
     
//     });



// }

// var startdate = new Date();
// test(100000)














// var chunksArr = [];
// function test(i){

//     let fs = require('fs');
//     var chunks = '';

//     fs.mkdirSync('C:/Git/balkan-db/db/s/t/ss/666', { recursive: true });

//     var ws = fs.createWriteStream('C:/Git/balkan-db/db/s/t/ss/666/' + i + '.json', { flags:'w'});

//     // this will fire if the file is not there
//     ws.on('error', function (err) {
    
//         console.log('error');
//         console.log(err);
    
//     });


//     ws.write(JSON.stringify({
//                 "planId3333": "OrgChartJS-PROFESSIONAL",
//                 "amount": 7093,
//                 "ratesUSDto": {
//                     "USD": 1,
//                     "EUR": 0.8965393580778197,
//                     "INR": 70.92746996593151,
//                     "CNY": 7.041420118343196,
//                     "BGN": 1.7534516765285997
//                 },
//                 "currency": "INR",
//                 "status": "Active",
//                 "createdAt": "2019-11-01T15:10:03.679Z",
//                 "id": 6
//             }));

//     ws.end(function(err){
//         if (err)
//             console.log('------------' + err);

//         i--;


//         if (i > 0){            
//             test(i)
//         }
//         else{

//             console.log(startdate);
            
//             console.log(new Date());
//         }

//     });
// }

// var startdate = new Date();
// test(10000)



var bd = new balkanDB(__dirname, 'db1', 'test');

 bd.set('asd', 'asd1', {sss:4}, function(){})
// bd.set('asd', 'asd3', {sss:4}, function(){})
//    bd.get('asd', 'asd1', function(err, data){
//     console.log(data);
//    })


bd.list('asd', function(){})

