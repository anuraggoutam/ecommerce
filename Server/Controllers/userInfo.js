const User = require('../models/User.js');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

//Update user info

const updateUser = asyncHandler(async (req, res) => {
  const { user_name, password } = req.body;

  // Check for user email
  const user = await User.findOne({
    userName: req.body.user_name,
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500);
      throw new Error(err);
    }
  }
});

//delete user

const deleteUser = asyncHandler(async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted...');
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

//get user

const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

//getAllUsers

const getAllUsers = asyncHandler(async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

//GET USER STATS
const getUserStats = asyncHandler(async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

module.exports = { updateUser, deleteUser, getUser, getAllUsers, getUserStats };
