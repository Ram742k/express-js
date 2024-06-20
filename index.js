//import express module
const express = require('express');

//create express app 
const app = express();

//run the server

app.listen(3003, ()=>{
    console.log('Server is running on http://localhost:3003');
});

//create routes
app.get('/', (req, res)=>{
    res.send('Hello 123');
});
