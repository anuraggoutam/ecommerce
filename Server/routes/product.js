const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} = require('../Controllers/Product');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware/verifyToken');

const router = require('express').Router();

//CREATE

router.post('/', verifyTokenAndAdmin, createProduct);

//UPDATE
router.put('/:id', verifyTokenAndAdmin, updateProduct);

//DELETE
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);

//GET PRODUCT
router.get('/find/:id', getProduct);

//GET ALL PRODUCTS
router.get('/', getAllProducts);

module.exports = router;
