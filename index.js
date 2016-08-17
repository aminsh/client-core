require('./server/utility/string.prototypes');
require('./server/utility/array.prototypes');
console.log('start ...');

var express = require('express');
var app = express();


var env = process.env.NODE_ENV || 'development';

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/routes')(app);

app.listen(config.port);


console.log('Port ' + config.port + ' is listening ...');




