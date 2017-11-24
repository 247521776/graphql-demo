const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const link = new Schema({
    url: String,
    description: String
});

module.exports = mongoose.model('graphql_link', link);