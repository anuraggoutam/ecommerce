const {
  isAdmin,
  isAuth,
  verifyTokenAndAuthorization,
} = require('../middleware/verifyToken');
const {
  createCart,
  updateCart,
  deleteCart,
  getCart,
  getAllCart,
} = require('../Controllers/userCart');
const router = require('express').Router();

//CREATE

router.post('/', isAuth, isAdmin, createCart);

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, updateCart);

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteCart);

//GET USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, getCart);

// //GET ALL
router.get('/', isAuth, isAdmin, getAllCart);

module.exports = router;
