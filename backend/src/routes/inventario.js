const { Router } = require('express');
const router = Router();

const { getInventario, createProducto, getProducto, deleteProducto, updateProducto } = require('../controllers/inv');

router.route('/')
    .get(getInventario)
    .post(createProducto);

router.route('/:id')
    .get(getProducto)
    .put(updateProducto)
    .delete(deleteProducto);

module.exports = router;