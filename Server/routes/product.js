const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} = require('../Controllers/Product');
const {
  isAuth,
  isAdmin,
  verifyTokenAndAuthorization,
} = require('../middleware/verifyToken');

const router = require('express').Router();

//CREATE

router.post('/', isAuth, isAdmin, createProduct);

//UPDATE
router.put('/:id', isAuth, isAdmin, updateProduct);

//DELETE
router.delete('/:id', isAuth, isAdmin, deleteProduct);

//GET PRODUCT
router.get('/find/:id', getProduct);

//GET ALL PRODUCTS
router.get('/', getAllProducts);

module.exports = router;
