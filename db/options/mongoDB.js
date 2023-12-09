const mongoose = require('mongoose');

const dotenv = require(`dotenv`);
dotenv.config();

const URL = process.env.URL_MONGO;

let connection = null;

module.exports = () => {
    if (connection) {
        return connection
    }
    connection = mongoose.connect(URL, {
        useNewUrlParser: true
    });
};


