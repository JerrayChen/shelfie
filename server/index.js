require('dotenv').config();
const express = require('express');
const app = express();
const { SERVER_PORT, DATABASE_URI } = process.env;
const massive = require('massive');

app.use(express.json());

massive(DATABASE_URI).then((db)=>{
    console.log("Database connected", db);
    app.set('db',db);
})


app.listen(SERVER_PORT, () => {console.log("Server is listening port", SERVER_PORT);});