const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please input product name"],
      minlength: [2, "Please Input at least 2 letters"],
      maxlength: [50, "Please Input at most 50 letters"],
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Please input product price"],
      minlength: [50, "Please Input at least 50 characters"],
    },
    image: {
      type: String,
      default: "/uploads/example.jpg",
    },
    category: {
      type: String,
      required: true,
      enum: ["office", "kitchen", "bedroom"],
    },
    company: {
      type: String,
      required: [true, "Please input company name"],
      enum: {
        values: ["ikea", "liddy", "marcos"],
        message: "{VALUE} is not supported",
      },
    },
    colors: {
      type: [String],
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    inventory: {
      type: Number,
      required: true,
      default: 15,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
