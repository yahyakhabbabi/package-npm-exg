const express = require('express');
const app = require('app');
const PORT = process.env.PORT || 3000;
const bodyparser = require('body-parser');
//Middelware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.listen(PORT,()=>{
    console.log('listening in port',PORT);
})