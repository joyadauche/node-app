const express = require('express');
const app = express();
const axios = require('axios');
const constants = require('./constants');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const { API_URL, TITLE } = constants;

    try {
        axios.get(API_URL).then(({ data}) => {
            if(data) return res.render('index', { title: TITLE, data })
        }).catch(error => {
            res.render('index', { title: TITLE, error, data: [] })
        });
        
    } catch (error) {
        console.log(error.message)
    }
});

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

