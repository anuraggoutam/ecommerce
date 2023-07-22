const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, name, lastname } = req.body;

  if (!username || !email || !password || !name || !lastname) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    lastname,
    email,
    username,
    password: hashedPassword,
  });
  const accessToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: '3d' }
  );

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: accessToken,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Check for user email
  const user = await User.findOne({
    username: username,
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '3d' }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } else {
    res.status(500);
    throw new Error('Invalid credentials');
  }
});

module.exports = {
  registerUser,
  loginUser,
};
