#!/usr/bin/env node

const express = require('express');
const app = express(); // Corrected 'app' to 'express'
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser'); // Corrected 'bodyparser' to 'bodyParser'

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
