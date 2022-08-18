const Project = require("../models/projects.model");
const jwt = require("jsonwebtoken");
const multer = require("multer");

module.exports = {
  findAllProjects: (req, res) => {
    Project.find({})
      // .populate("createdBy", "username _id")
      .then((allProjects) => {
        console.log(allProjects);
        res.json(allProjects);
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong in findAllProjects",
          error: err,
        });
      });
  },

  findAllProjectsByUser: (req, res) => {
    Project.find({ createdBy: req.params.userId })
      .then((allUserProjects) => {
        console.log(allUserProjects);
        res.json(allUserProjects);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  findOneProject: (req, res) => {
    Project.findOne({ _id: req.params.id })
      .then((oneProject) => {
        console.log(oneProject);
        res.json(oneProject);
      })
      .catch((err) => {
        console.log("findOneProject failed");
        res.json({
          message: "Something went wrong in findOneProject",
          error: err,
        });
      });
  },

  createNewProject: (req, res) => {
    const newProjectObj = new Project(req.body);
    const decodedJWT = jwt.decode(req.cookies.usertoken, {
      complete: true,
    });
    newProjectObj.createdBy = decodedJWT.payload.id;
    if (req.file) {
      newProjectObj.projectImage = req.file.path;
    }
    newProjectObj
      .save()
      .then((newProject) => {
        console.log(newProject);
        res.json(newProject);
      })
      .catch((err) => {
        console.log("Something went wrong in createNewProject");
        res.status(400).json(err);
      });
  },

  updateProject: (req, res) => {
    Project.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedProject) => {
        console.log(updatedProject);
        res.json(updatedProject);
      })
      .catch((err) => {
        res.status(400).json(err);
        res.json({
          message: "Something went wrong in updateProject",
          error: err,
        });
      });
  },

  deleteProject: (req, res) => {
    Project.deleteOne({ _id: req.params.id })
      .then((deletedProject) => {
        console.log(deletedProject);
        res.json(deletedProject);
      })
      .catch((err) => {
        console.log("deleteProject failed");
        res.json({
          message: "Something went wrong with deleteProject",
          error: err,
        });
      });
  },
};
