const { request } = require("express");
const Producto = require("../models/Producto");
const Prodructo = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    try {
        const producto = new Producto(req.body);
        producto.save();
        res.status(200).json({mensaje: "Producto creado"});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error"});
    }
};

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json({productos})

    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error"});
    }

};

exports.obtenerProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            return res.status(404).json({mensaje: "Producto no encontrado"});
        }

        res.json({producto})

    } catch (error) {
        console.error(error);
        res.status(404).json({mensaje: "Producto no encontrado"});
    }

};

exports.actualizarProducto = async (req, res) => {
    const {nombre, marca, descripcion, precio, stock} = req.body;
    const nuevoProducto = {};
    if(nombre){
        nuevoProducto.nombre = nombre;
        nuevoProducto.marca = marca;
        nuevoProducto.precio = precio;
        nuevoProducto.descripcion = descripcion;
        nuevoProducto.stock = stock;
    }

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            return res.status(404).json({mensaje: "Producto no encontrado"});
        }
        producto = await Prodructo.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: nuevoProducto},
            {new: true}
        );
            res.json({producto});
    } catch (error) {
        console.error(error);
        res.status(404).json({mensaje: "No es posible actualizar el producto"});
    }

}

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            return res.status(404).json({mensaje: "Producto no encontrado"});
        }
        await Prodructo.findOneAndRemove({_id: req.params.id});
        res.json({mensaje: "Producto eliminado"});
    } catch (error) {
        console.error(error);
        res.status(404).json({mensaje: "No es posible eliminar el producto"});
    }
}


