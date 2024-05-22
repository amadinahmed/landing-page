const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const csvLine = `${name},${email}\n`;

    fs.appendFile('data.csv', csvLine, (err) => {
        if (err) {
            console.error('Failed to write to CSV', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.status(200).send('Success');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
