require("dotenv").config();
const express = require('express');

const connection = require('./config/connection');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

connection.once("open", () => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}!`);
    });    
});