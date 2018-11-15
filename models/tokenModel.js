const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TokenSchema = new Schema({
    contra: {type: String, required: true, max: 100},
});

// Export the model
module.exports = mongoose.model('Token', TokenSchema);