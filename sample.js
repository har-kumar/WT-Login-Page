const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/public' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'user' && password === 'password') {
        res.send('Login successful!');
    } else if (username === 'harini' && password === 'harini@05') {
        res.send('Login successful!');
    } else if (username === 'harish' && password === 'harish@05') {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
