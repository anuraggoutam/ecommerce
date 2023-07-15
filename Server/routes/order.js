const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
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

router.post('/', verifyToken, creatOrder);

//UPDATE
router.put('/:id', verifyTokenAndAdmin, updateOrder);

//DELETE
router.delete('/:id', verifyTokenAndAdmin, deleteOrder);

//GET USER ORDERS
router.get('/find/:userId', verifyTokenAndAuthorization, get);

// //GET ALL

router.get('/', verifyTokenAndAdmin, getAll);

// GET MONTHLY INCOME

router.get('/income', verifyTokenAndAdmin, getMonthly);

module.exports = router;
