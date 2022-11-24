const express = require('express')

const app = express();

const zip = require('express-zip');

const folderPath = __dirname + '/Files';

app.get('/single', function (req, res) {
    console.log('single file');

    res.download(folderPath + '/single_gfg.txt', function (err) {
        if (err) {
            console.log(err);
        }
    })
})

app.get('/multiple', function (req, res) {
    console.log('Multiple file download')


    res.zip([
        {
            path: folderPath + '/multiple_one_gfg.txt',
            name: 'one_gfg.txt'
        },
        {
            path: folderPath + '/multiple_two_gfg.txt',
            name: 'two_gfg.txt'
        },
        {
            path: folderPath + '/multiple_three_gfg.txt',
            name: 'three_gfg.txt'
        }
    ])
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, function (req, res) {
    console.log('Server started to listen at 3000');
})