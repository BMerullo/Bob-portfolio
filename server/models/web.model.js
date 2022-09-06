const mongoose = require("mongoose");

const WebSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title to this setup"],
      minLength: [3, "Title must be at least 3 characters long!"],
    },

    description: {
      type: String,
      minLength: [3, "Description must be at least 3 characters long!"],
      maxLength: [500, "Please keep your description under 500 characters"],
    },

    image: {
      type: String,
      required: [true, "Please uplaod an image"],
    },
  },
  { timestamps: true }
);

const Web = mongoose.model("Web", WebSchema);

module.exports = Web;
