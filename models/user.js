var mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const confiq = require("../config/config").get(process.env.NODE_ENV);
const salt = 10;
const userSchema = mongoose.Schema({
  firstname: {
    required: true,
    type: String,
    maxlength: 100,
  },
  lastname: {
    required: true,
    type: String,
    maxlength: 100,
  },
  email: {
    required: true,
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    required: true,
    type: String,
    minlength: 8,
  },
  password2: {
    required: true,
    type: String,
    minlength: 8,
  },
  token: {
    type: String,
  },
});
userSchema.pre("save", function (next) {
  var user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(salt, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        user.password2 = hash;
        next();
      });
    });
  } else {
    next();
  }
});
userSchema.methods.comparepassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return cb(next);
    cb(null, isMatch);
  });
};
userSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), confiq.SECRET);
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};
userSchema.statics.findByToken = function (token, cb) {
  var user = this;
  jwt.verify(token, confiq.SECRET, function (err, decode) {
    user.findOne({ _id: decode, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};
userSchema.methods.deleteToken = function (token, cb) {
  var user = this;
  user.update({ $unset: { token: 1 } }, function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};
module.exports = mongoose.model("User", userSchema);
