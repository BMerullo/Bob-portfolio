const webController = require("../controllers/web.controller");
const { authenticate } = require("../config/jwt.config");
const multer = require("multer");
const upload = require("../middleware/upload");

module.exports = (app) => {
  app.get("/api/web", webController.findAllWebs);
  app.post(
    "/api/web",
    authenticate,
    upload.single("image"),
    webController.createNewWeb
  );
  app.get("/api/user/web/:userId", webController.findAllWebsByUser);
  app.get("/api/web/:id", webController.findOneWeb);
  app.put("/api/web/:id", webController.updateWeb);
  app.delete("/api/web/:id", webController.deleteWeb);
};
