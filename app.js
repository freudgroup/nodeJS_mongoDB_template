

// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

var theme = 'default';
var basePath = __dirname;

// views as directory for all template files
// instruct express to server up static assets
if (theme) {
    //nconf.file('theme', { type:'file', file:'themes/' + theme +'/config.json' });
    basePath += '/themes/' + theme;
}

app.set('views', basePath +  '/views');
app.set('view engine', 'jade'); // use either jade or ejs       

app.use(express.static(basePath+'/public'));
app.use('/', require('./controllers/app').app);


//mongo gridfs file system

// Set server port
app.listen(4000);
console.log('server is running');
