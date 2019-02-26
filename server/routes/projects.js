const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  createProject,
  getProject,
  deleteProject,
  updateProject
} = require("../handlers/projects");
// prefix - /api/users/:id/projects
router.route("/").post(createProject);

// prefix - /api/users/:id/projects/:project_id
router
  .route("/:project_id")
  .get(getProject)
  .delete(deleteProject)
  .put(updateProject);
module.exports = router;
