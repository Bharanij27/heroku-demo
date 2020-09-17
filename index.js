const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { response } = require("express");
const fs = require('fs');

app.use(bodyParser.json());

app.get('/', function(req, res){
    let current = new Date;
    let fileName = ''+current.getDate()
    fs.writeFile(fileName, current, function(err){
        if(err) throw err;
        console.log("Created and data added sucessfully");
    })
    fs.close();
})

app.listen(process.env.PORT || 3030, function () {
  console.log("Server Started");
});