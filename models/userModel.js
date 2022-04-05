const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Name"],
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Provide Email"],
  },
  password: {
    type: String,
    required: [true, "Please Provide password"],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

module.exports = mongoose.model("User", UserSchema);
