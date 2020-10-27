const express = require('express');
const router = express.Router();

const ProductsController = require('../constroller/products');

router.get('/', ProductsController.products_get_all);

router.post('/', ProductsController.produtct_create_product);

router.get('/:productId', ProductsController.products_get_product);

router.patch('/:productId', ProductsController.products_update_product);

router.delete('/:productId', ProductsController.products_delete_product);

module.exports = router;
