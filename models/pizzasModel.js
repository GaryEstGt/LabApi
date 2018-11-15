const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PizzaSchema = new Schema({
    nombre: {type: String, required: true, max: 100},
    descripcion: {type: String, required: true, max: 100},
    ingredientes:[String],
    tipoMasa: {type: String, required:true,max:100},
    tamaño: {type: String,requierd:true},
    queso: {type: Boolean}
});

// Export the model
module.exports = mongoose.model('Pizza', PizzaSchema);