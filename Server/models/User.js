const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: 'string', require: true },
    lastname: { type: 'string', require: true },
    username: { type: 'string', required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
