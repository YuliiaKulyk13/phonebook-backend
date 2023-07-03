const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
    },
  },
  { versionKey: false }
);

userSchema.methods.hashPassword = async function (password) {
  this.password = await bcrypt.hash(password, 10);
};

userSchema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
const User = model("user", userSchema);

module.exports = User;
