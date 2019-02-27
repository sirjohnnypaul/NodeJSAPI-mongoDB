let mongoose = require('mongoose');

//Provide your db credentials
const server = '';
const database = '';
const user = '';
const password = '';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique:true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);