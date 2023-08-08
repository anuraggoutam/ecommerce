const {
  isAdmin,
  isAuth,
  verifyTokenAndAuthorization,
} = require('../middleware/verifyToken');
const {
  creatOrder,
  updateOrder,
  deleteOrder,
  get,
  getAll,
  getMonthly,
} = require('../Controllers/userOrder');
const router = require('express').Router();

//CREATE

router.post('/', isAuth, creatOrder);

//UPDATE
router.put('/:id', isAuth, isAdmin, updateOrder);

//DELETE
router.delete('/:id', isAuth, isAdmin, deleteOrder);

//GET USER ORDERS
router.get('/find/:userId', verifyTokenAndAuthorization, get);

// //GET ALL

router.get('/', isAuth, isAdmin, getAll);

// GET MONTHLY INCOME

router.get('/income', isAuth, isAdmin, getMonthly);

module.exports = router;
