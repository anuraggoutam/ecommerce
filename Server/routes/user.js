const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats,
} = require('../Controllers/userInfo');
const {
  isAdmin,
  isAuth,
  verifyTokenAndAuthorization,
} = require('../middleware/verifyToken');

const router = require('express').Router();

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, updateUser);

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);

//GET USER
router.get('/find/:id', isAuth, isAdmin, getUser);

//GET ALL USER
router.get('/', isAuth, isAdmin, getAllUsers);

//GET USER STATS

router.get('/stats', isAuth, isAdmin, getUserStats);

module.exports = router;
