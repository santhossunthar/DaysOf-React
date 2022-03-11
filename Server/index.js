const express = require('express');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/keys', (req, res) => {
    const keyData = req.body;
    const keyId = keyData.keyId;
    const keys = keyData.keys;

    const sql = `INSERT INTO keystroke (id, keystring) VALUES ('${keyId}', ' ')`;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results);
        }
    });
});

app.listen(port)