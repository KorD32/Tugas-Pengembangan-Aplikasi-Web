const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/db');


const app = express();
const port = 3000;

connection.connect((err) => {
    if (err) {
        console.error('Error Koneksi ke Database');
        return;
    }
    console.log('Koneksi Database Berhasil ');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});