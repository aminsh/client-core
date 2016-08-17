var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: '',
        port: process.env.PORT || 1024
    },
    production: {
        rootPath: rootPath,
        db: '',
        port: process.env.PORT || 80
    }
}