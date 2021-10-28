const express = require("express");
const fs = require('fs');
const path = require('path');

const dbFilePath = path.join(__dirname, 'db.json');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json()); //Used to parse JSON bodies

app.get("/getData", (request, res) => 
{
  const options = {
    encoding: 'utf8'
  }; 
  fs.readFile(dbFilePath, options, function readFileCallback(err, data)
  {
    if (err){
      throw err
    }
    res.json({message: Object.values(JSON.parse(data))})
  });
});

app.post("/submit", (request, res) => {
  console.log('Got body:', request.body);
  const options = {
    encoding: 'utf8'
  }; 
    fs.readFile(dbFilePath, options, function readFileCallback(err, data)
    {
      obj = JSON.parse(data); //now it an object
      obj.push(request.body); //add some data
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile(dbFilePath, json, function(err, result) {
        if(err) console.log('error', err);
      }); 
   });

  res.json({message: "Success"})
});


  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });