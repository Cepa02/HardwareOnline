const mongoose = require("mongoose");

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    marca: {
        type: String,
        require: true,
        trim: true
    },
    precio: {
        type: Number,
        require: true 
    },
    descripcion: {
        type: String,
        require: true
    },
    stock: {
        type: Boolean
    },
    registro: {
        type: Date,
        default: Date.now()
    },
    imagen: {
        type: String,
        require: false,
        default: 'default'
    }
});

module.exports = mongoose.model("Producto", ProductoSchema);