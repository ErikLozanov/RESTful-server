const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.urlencoded({extended: false}));
// express.json will get AJAX requests (JSON data)
app.use(express.json());

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
});


app.get('/', (req, res) => {
    res.send('RESTful service');
});

app.use(routes);
app.listen(3030, () => console.log('RESTful server is listening on port 3030'));
