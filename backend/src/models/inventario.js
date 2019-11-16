const { Schema, model } = require('mongoose');

const inventarioSchema = new Schema({
    Nombre: String,
    Precio: {
        type: String,
        required: true
    },
    Stock: String
}, {
    timestamps: true
});

module.exports = model('Producto', inventarioSchema);