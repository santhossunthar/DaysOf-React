const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/keys', (req, res) => {
    const keyData = req.body;
    console.log(keyData.key)
    res.send(true)
});

app.listen(port)