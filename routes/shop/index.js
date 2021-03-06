const express = require('express');
const router = express.Router();
const shopController = require('../../controllers/shop');
const isAuth = require('../../middleware/is-auth');
router.get('/',shopController.getProducts);
router.get('/product/:productId',shopController.getProduct);
router.get('/cart', isAuth, shopController.getCart);
router.post('/cart', isAuth, shopController.postCart);
router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);
router.post('/create-order', isAuth, shopController.postOrder);
router.get('/orders', isAuth, shopController.getOrders);

module.exports = router;