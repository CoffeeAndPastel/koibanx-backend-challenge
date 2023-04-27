const express = require("express");
const { errorRoute, errorRouter } = require("./errorLogRoute");
const { taskRoute, taskRouter } = require("./taskRoute");
const { uploadRoute, uploadRouter } = require("./uploadRoute");

const routes = express.Router();

routes.use(uploadRoute, uploadRouter);
routes.use(errorRoute, errorRouter);
routes.use(taskRoute, taskRouter);

module.exports = routes;
