const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const CronJob = require('cron').CronJob;
const massive = require('massive')
const bodyParser = require('body-parser')
require('dotenv').config()
var connectionString = process.env.connectionString;


const app = express();
app.use(bodyParser.json())
//indexing
massive(connectionString).then(massiveInstance => {
app.set('db', massiveInstance);
})

//
//
//
// process.argv.forEach((val, index, array) => {
//   if(val === 'write-to-demo-linux') {
//     //File writing use case #2
//     //This allows us to write to an existing file
//     // var stream = fs.createWriteStream("demoLinux.txt", {flags:'a'});
//     // stream.write('I am adding to the file')
//     // stream.end();
//     var stream = fs.createWriteStream("starwarsperson.txt", {flags:'a'});
//     stream.write('I am adding to the file')
//     stream.end();
//   }
// })
//
// //File writing use case #1
// //Make a call to a third party api, and write results to a text file
// //If this file doesn't exist, then writeFile will create it
// //This method will overwrite all contents of a file if it exists so be careful
//
// //Scenario
// //I make a call to a server that's been adding my star wars users to their database. I make a call everynight and need to write this to a file to be process in the morning by me
// axios.get('https://swapi.co/api/people/1/').then(person => {
//   if(person.data) {
//     let rightNow = new Date();
//     let personText = `This is my person ${person.data.name} and this is the time it was retrieved ${rightNow}`;
//     fs.writeFile('starwarsperson.txt', personText, (err) => {
//         // throws an error, you could also catch it here
//
//         if (err) throw err;
//     });
//   }
// }).catch(err => {
//   fs.writeFile('starwarsperson.txt', err, (error) => {
//       // throws an error, you could also catch it here
//       if (error) throw error;
//   });
// })
//
// // Chron tasks
// //Runs every second
// new CronJob('* * * * * *', () => {
//   console.log('You will see this message every second')
// }, null, true)
//
// //runs every 30 seconds
// new CronJob('30 * * * * *', () => {
//   console.log('You will see this message every 30 seconds')
// }, null, true)
//
// //runs every 30 minutes
// new CronJob('00 30 * * * *', () => {
//   console.log('You will see this message every 30 minutes')
// }, null, true)
//
// //runs every weekday at 10:15
// new CronJob('00 15 10 * * 1-5', () => {
//   console.log('You will see this message every weekday at 10:15')
// }, null, true)
//
// //Example of using cron to go in and delete files
// //will run every night at 2
// new CronJob('10 * * * * *', () => {
//   console.log('Starting the cron task')
//   var directory = './garbage'
//   fs.readdir(directory, (err, files) => {
//     if (err) throw err;
//
//     for (const file of files) {
//       console.log('getting inside for looop')
//       fs.unlink(path.join(directory, file), err => {
//         if (err) throw err;
//         var filePath = `./garbage/${file}`
//         fs.closeSync(fs.openSync(filePath, 'w'))
//       });
//
//     }
//     console.log('Finished deleting files')
//   });
// }, null, true)

//Routes
app.get('/api/users', (req, res) => {
  var db = app.get('db');
  console.log(req.query)
  if(req.query.first) {
    var first = req.query.first;
  }
  var date1 = new Date();
  db.getUsersByFirst({first}).then(users => {
    var date2 = new Date();
    var diff = date2 - date1;
    console.log('difference in millisenconds', diff)
    res.status(200).send(users)
  })
})


app.listen(3000, () => {
  console.log('listening on port 3000')
})
