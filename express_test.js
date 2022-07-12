const express = require('express')
const path = require('path');
const app = express()
const port = 3000

/*var express = require('../..');
var path = require('path');
var session = require('express-session');*/



app.get('/', (req, res) => {
  //res.send('Hello World!')
  //res.sendFile('C:\\Users\\franc\\Desktop\\a.jpg')
  res.sendFile(path.join(__dirname+'/home.html'))
  //res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
