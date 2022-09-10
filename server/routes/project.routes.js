const projectsController = require("../controllers/projects.controller");
const { authenticate } = require("../config/jwt.config");
const multer = require("multer");
const upload = require("../middleware/upload");

module.exports = (app) => {
  app.get("/api/projects", projectsController.findAllProjects);
  app.post(
    "/api/projects",
    authenticate,
    upload.single("image"),
    projectsController.createNewProject
  );
  app.get(
    "/api/user/projects/:userId",
    projectsController.findAllProjectsByUser
  );
  app.get("/api/projects/:id", projectsController.findOneProject);
  app.put(
    "/api/projects/:id",
    authenticate,
    upload.single("image"),
    projectsController.updateProject
  );
  app.delete("/api/projects/:id", projectsController.deleteProject);
};
