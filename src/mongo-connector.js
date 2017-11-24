const mongoose    = require('mongoose');
const mongooseUrl = require('../config/mongoose');
mongoose.Promise  = global.Promise;
const link        = require('../models/link');
const user        = require('../models/user')

module.exports = async () => {
    const db = await mongoose.connect(mongooseUrl, {useMongoClient: true});
    return {
        Links: link,
        Users: user
    }
}