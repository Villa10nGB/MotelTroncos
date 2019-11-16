const MotelCtrl = {}
const Inventario = require('../models/inventario');

MotelCtrl.getInventario =  async (req, res) => {
    const inventario = await Inventario.find();
    res.json(inventario);
}
MotelCtrl.createProducto = async (req, res) => {
    const { Nombre, Precio, Stock } = req.body;
    const newProducto = new Inventario({
        Nombre: Nombre,
        Precio: Precio,
        Stock: Stock
    })
    await newProducto.save();
    res.json({message: 'Producto guardado'});
}
MotelCtrl.deleteProducto = async (req, res) => {
    await Inventario.findByIdAndDelete(req.params.id);
    res.json({message: 'Producto eliminado'});
}
MotelCtrl.updateProducto = async (req, res) => {
    const { Nombre, Precio, Stock } = req.body;
    await Inventario.findOneAndUpdate({ _id: req.params.id }, {
        Nombre,
        Precio,
        Stock
    });
    res.json({message: 'Producto Actualizado'});
}
MotelCtrl.getProducto = async (req, res) => {
    const producto = await Inventario.findById(req.params.id);
    res.json(producto);
}

module.exports = MotelCtrl;