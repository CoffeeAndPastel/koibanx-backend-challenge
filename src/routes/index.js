const express = require("express");
const { callbackRoute, callbackRouter } = require("./callbackRoute");
const { errorRoute, errorRouter } = require("./errorLogRoute");
const { taskRoute, taskRouter } = require("./taskRoute");
const { uploadRoute, uploadRouter } = require("./uploadRoute");

const routes = express.Router();

routes.use(uploadRoute, uploadRouter);
routes.use(taskRoute, taskRouter);
routes.use(callbackRoute, callbackRouter);

module.exports = routes;
