const Project = require("../models/web.model");
const jwt = require("jsonwebtoken");
const multer = require("multer");

module.exports = {
  findAllWebs: (req, res) => {
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

  findAllWebsByUser: (req, res) => {
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

  findOneWeb: (req, res) => {
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

  createNewWeb: (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const url = req.body.url;
    const image = req.file.filename;

    const newProjectData = {
      title,
      description,
      url,
      image,
    };

    const newProjectObj = new Project(newProjectData);
    const decodedJWT = jwt.decode(req.cookies.usertoken, {
      complete: true,
    });
    newProjectObj.createdBy = decodedJWT.payload.id;
    // if (req.file) {
    //   newProjectObj.image = req.file.filename;
    // }
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

  updateWeb: (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const url = req.body.url;
    const image = req.file.filename;

    const newWebData = {
      title,
      description,
      url,
      image,
    };
    Project.findOneAndUpdate({ _id: req.params.id }, newWebData, {
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

  deleteWeb: (req, res) => {
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
