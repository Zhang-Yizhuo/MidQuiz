// config/database.js
module.exports = {

    'url' : 'mongodb://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD + '.mlab.com:23485/webdev' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot

};