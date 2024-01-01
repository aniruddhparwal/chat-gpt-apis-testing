//initalise the express "app" object
const express = require("express");
const routes = require('./routes/routes.js');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use('/', routes);


//start the server on port 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));