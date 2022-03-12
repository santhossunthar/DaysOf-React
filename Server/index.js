const express = require('express');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/keys', (req, res) => {
    const keyData = req.body;
    const keyId = keyData.keyId;
    const keys = keyData.keys;

    keyStrokes = [];
    keys?.forEach(element => {
        if (element[0] === "\"" && element[element.length - 1] === "\"") {
            keyStrokes.push(element.replaceAll('"', ''));
        } else if (element[0] === "'" && element[element.length - 1] === "'") {
            keyStrokes.push(element.replaceAll("'", ""));
        } else {
            keyStrokes.push(element);
        }
    });

    const keyString = keyStrokes.join(' ');
    const sql = `INSERT INTO keystroke (id, keystring) VALUES ('${keyId}', '${keyString}')`;

    if (keyString.length !== 0) {
        db.query(sql, (err, results) => {
            if (err) {
                console.error('Error:', err);
                res.status(500).send('Internal Server Error');
            } else {
                res.json(results);
            }
        });
    } else {
        res.send(true);
    }
});

app.listen(port)