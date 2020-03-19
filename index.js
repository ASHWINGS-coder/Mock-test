const express = require('express');
const port = 3000;
const app = express();
const db = require('./config/mongoose');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.urlencoded());
// inport routes 
const Routes = require('./routes/index');

app.use("/",Routes)


app.listen(port,(err) => {
    if(err){
        console.log(`Error ${err}`);
    }
    console.log(`Server is up and running in port ${port}`);
})

