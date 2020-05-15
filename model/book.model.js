const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    name: {type: String},
    publisher: {type: String},
    description: {type: String}
});

module.exports = mongoose.model('Book', BookSchema);