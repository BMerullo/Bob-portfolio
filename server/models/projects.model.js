const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
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

    projectImage: {
      type: String,
      required: [true, "Please uplaod an image"],
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
